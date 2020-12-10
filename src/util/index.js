import { useCallback, useState } from 'react';
import { Typography, Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import html2canvas from 'html2canvas'
import { keyArr, keyMap, assetsMap, numberToThousands } from './config'

const { Paragraph, Text } = Typography;

let clientKeys = null
function getAssetsColums() {
  const columns = []
  for(let item of keyArr) {
    const column = {
      title: <Paragraph
        ellipsis={{rows: 1,}}
        title={item.alias}
      >
        {item.alias}
      </Paragraph>,
      width: item.width || 140,
      dataIndex: item.keywordName,
      key: item.keywordName,
      render(text) {
        if (typeof text === 'number') {
          return <div className='text-right'>{numberToThousands(text)}</div>
        }
        return text
      }
    }
    if (item.keywordName === 'SECNAME'
    || item.keywordName === 'SECCODE'
    || item.keywordName === 'ENDDATE') {
      column.fixed = 'left'
    }
    columns.push(column)
  }
  return columns
}
const assetsColumns = getAssetsColums()

function valueFormat(value, type) {
  if (type === 'number') {
    return numberToThousands(value)
  } else if (type === 'percentage') {
    return value + '%'
  }
  return value
}

function getAssetsAnalysisColums(arr) {
  const columns = []
  for(let item of arr) {
    let isHeader = false
    if (item.key === 'SECNAME'
    || item.key === 'SECCODE'
    || item.key === 'ENDDATE') {
      isHeader = true
    }
    let icon = ''
    if (item.describe && item.describe.length) {
      icon = <Tooltip placement="topRight" title={item.describe.map((text, index) => {
        return <div key={index}>{index+1+'. '}{text}</div>
      })}>
        <QuestionCircleOutlined style={{marginLeft: 4}} />
      </Tooltip>
    }
    const column = {
      title: <Paragraph
        ellipsis={{rows: 1,}}
        title={item.title}
      >
        {item.title}{icon}
      </Paragraph>,
      width: isHeader ? 100 : 140,
      dataIndex: item.key,
      key: item.key,
      render(text, record) {
        if (isHeader) {
          return text
        }
        const data = item.algorithm(record)
        const value = valueFormat(data.value, item.type)
        switch(data.type) {
          case 0:
            return <div className='text-right'>
              <Text>{value}</Text>
            </div>
          case 1:
            return <div className='text-right'>
              <Text>{value}</Text>
            </div>
          case 2:
            return <div className='text-right'>
              <Text type="warning">{value}</Text>
            </div>
          case 3:
            return <div className='text-right'>
              <Text type="danger">{value}</Text>
            </div>
          default:
            return <div className='text-right'>
              <Text>{value}</Text>
            </div>
        }
      }
    }
    if (isHeader) {
      column.fixed = 'left'
    }
    columns.push(column)
  }
  return columns
}

function getAssetsAnalysisData(arr, data) {
  const textArr = []
  for(let item of arr) {
    for (let record of data) {
      let endDate = record.ENDDATE
      const data = item.algorithm(record)
      const describe = item.describe
      const value = valueFormat(data.value, item.type)
      let text = ''
      const describeText = describe[data.type] || describe[describe.length - 1]
      if (describeText) {
        switch(data.type) {
          case 0:
            text = <div className="text">
              {endDate} <span className="bold">{item.title}</span> 为：<Text type="success"><span className="bold">{value}</span></Text>
              ，注：<span className="bold">{describeText}</span>
            </div>
            break
          case 1:
            text = <div className="text">
              {endDate} <span className="bold">{item.title}</span> 为：<Text><span className="bold">{value}</span></Text>
              ，注：<span className="bold">{describeText}</span>
            </div>
            break
          case 2:
            text = <div className="text">
              {endDate} <span className="bold">{item.title}</span> 为：<Text type="warning"><span className="bold">{value}</span></Text>
              ，注：<span className="bold">{describeText}</span>
            </div>
            break
          case 3:
            text = <div className="text">
              {endDate} <span className="bold">{item.title}</span> 为：<Text type="danger"><span className="bold">{value}</span></Text>
              ，注：<span className="bold">{describeText}</span>
            </div>
            break
          default:
            text = <div className="text">
              {endDate} <span className="bold">{item.title}</span> 为：<Text type="success"><span className="bold">{value}</span></Text>
              ，注：<span className="bold">{describeText}</span>
            </div>
            break
        }
      }
      if (text) {
        textArr.push(text)
      }
    }
  }
  return textArr
}

// const assetsAnalysisColums = getAssetsAnalysisColums()

function getAssetsAnalysisRenderData(data) {
  const list = [
    {
      title: '明细',
      columns: assetsColumns
    }
  ]
  for(let item of assetsMap) {
    list.push({
      title: item.title,
      columns: getAssetsAnalysisColums(item.keys),
      textArr: getAssetsAnalysisData(item.keys, data)
    })
  }
  return list
}

const util = {
  getAssetsColumns() {
    return assetsColumns
  },
  // getAssetsAnalysisColums() {
  //   return assetsAnalysisColums
  // },
  getAssetsAnalysisList(data) {
    return getAssetsAnalysisRenderData(data)
  },

  dataFormat(data) {
    const yearMap = {}
    const fData = []
    for(let item of data) {
      if (item.ENDDATE.match(/\-12\-31$/g)) {
        const year = parseInt(item.ENDDATE.split('-')[0])
        yearMap[year] = item
        if (yearMap[year - 1]) {
          item['ZD038N'] = yearMap[year - 1]['F038N']
        } else {
          item['ZD038N'] = '--'
        }
        fData.push(item)
      }
    }
    return fData
  },

  paramFormat(param, isNotQ) {
    let str = isNotQ ? '' : '?'
    for (let k in param) {
      str += k + '=' + param[k] + '&'
    }
    return str.slice(0, str.length - 1)
  },

  fetch(url, data = {}, option = {}) {
    option.headers = {
      'content-type': 'application/json'
    }
    if (option.method === 'GET') {
      url = `${url}${util.paramFormat(data)}`
    } else {
      option.headers = {
        'content-type': 'application/x-www-form-urlencoded'
      }
      option = {
        ...option,
        mode: 'no-cors',
        body: util.paramFormat(data, true)
      }
    }
    return fetch(url, option).then((response) => {
      return response.json()
    }).then((data) => {
      return data
    })
  },

  setKey(client_id, client_secret) {
    return new Promise((resolve) => {
      window.chrome.storage.sync.set({
        client_id: client_id,
        client_secret: client_secret,
      }, function() {
        resolve()
      })
    })
  },

  getKey() {
    return new Promise((resolve) => {
      if (clientKeys) {
        resolve(clientKeys)
        return
      }
      window.chrome.storage.sync.get({
        client_id: '',
        client_secret: '',
      }, function(items) {
        clientKeys = items
        resolve(items)
      })
    })
  },

  getToken() {
    return util.getKey().then((keys) => {
      return util.fetch('http://webapi.cninfo.com.cn/api-cloud-platform/oauth2/token', {
        grant_type: 'client_credentials',
        client_id: keys.client_id,
        client_secret: keys.client_secret,
      }, {
        method: 'POST'
      }).then((data) => {
        return data.access_token
      })
    })
  },

  getFinanceData({
    scode,
    sdate,
    edate,
    token
  }) {
    return util.fetch('http://webapi.cninfo.com.cn/api/stock/p_stock2300', {
      scode: scode,
      type: '071001',
      source: '033003',
      sdate: sdate,
      edate: edate,
      access_token: token,
    }, {
      method: 'GET',
    }).then((data) => {
      if (data.resultcode === 200) {
        return data.records
      }
      throw new Error(JSON.stringify(data))
    })
  },

  setLocalFinanceData(data) {
    // return new Promise((resolve) => {
    //   window.chrome.storage.sync.set({
    //     finance_data: JSON.stringify(data),
    //   }, function() {
    //     resolve()
    //   })
    // })
    return new Promise((resolve) => {
      window.localStorage.setItem('finance_data', JSON.stringify(data))
      resolve()
    })
  },

  getLocalFinanceData() {
    // return new Promise((resolve) => {
    //   window.chrome.storage.sync.get({
    //     finance_data: '',
    //   }, function(items) {
    //     let data = null
    //     try {
    //       if (items.finance_data) {
    //         data = JSON.parse(items.finance_data)
    //       }
    //     } catch(err) {
    //       console.error(err)
    //     }
    //     resolve(data)
    //   })
    // })
    return new Promise((resolve) => {
      let data = window.localStorage.getItem('finance_data')
      try {
        if (data) {
          data = JSON.parse(data)
        }
      } catch(err) {
        console.error(err)
      }
      resolve(data)
    })
  },
  base64ToBlob(base64, mime) {
    mime = mime || ''
    const sliceSize = 1024
    const byteChars = window.atob(base64)
    const byteArrays = []
    for (let offset = 0, len = byteChars.length; offset < len; offset += sliceSize) {
        const slice = byteChars.slice(offset, offset + sliceSize)
        const byteNumbers = new Array(slice.length)
        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i)
        }
        const byteArray = new Uint8Array(byteNumbers)
        byteArrays.push(byteArray)
    }
    return new Blob(byteArrays, {type: mime})
  },
  downPageImg(node) {
    html2canvas(node).then(function(canvas) {
      const aLink = document.createElement('a')
      const img = canvas.toDataURL('image/png').split(',')[1]
      const imgFile = util.base64ToBlob(img, 'image/png')
      aLink.download = '报表'
      aLink.href = URL.createObjectURL(imgFile)
      aLink.click()
      URL.revokeObjectURL(imgFile)
    })
  },
}

export const useGetFinanceData = () => {
  const [fData, setFData] = useState(() => {
    return null
  })
  const [error, setError] = useState(() => {
    return null
  })
  const [loading, setLoading] = useState(() => {
    return false
  })
  const getFinanceData = useCallback(({
    scode,
    sdate,
    edate
  }) => {
    setLoading(true)
    return util.getToken().then((token) => {
      return util.getFinanceData({
        scode,
        sdate,
        edate,
        token
      }).then((data) => {
        const fData = util.dataFormat(data)
        setFData(fData)
        setLoading(false)
        return fData
      })
    }).catch((err) => {
      setError(err)
      setLoading(false)
    })
  }, [])
  return {
    getFinanceData,
    fData,
    error,
    loading,
  }
}

export default util
