import { useCallback, useState } from 'react';
import { Typography, Tooltip, Divider } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import html2canvas from 'html2canvas'
import { fkeyArr, pKeyArr, cKeyArr, assetsMap, numberToThousands } from './config'

const { Paragraph, Text } = Typography;
const DefaultWidth = 140

let clientKeys = null
function defaultColumns(item) {
  const column = {
    title: <Paragraph
      ellipsis={{rows: 1,}}
      title={item.alias}
    >
      {item.alias}
    </Paragraph>,
    width: item.width || DefaultWidth,
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
  return column
}
function getFColumns() {
  const columns = []
  for(let item of fkeyArr) {
    columns.push(defaultColumns(item))
  }
  return columns
}
const fColumns = getFColumns()

function getPColumns() {
  const columns = []
  for(let item of pKeyArr) {
    columns.push(defaultColumns(item))
  }
  return columns
}
const pColumns = getPColumns()

function getCColumns() {
  const columns = []
  for(let item of cKeyArr) {
    columns.push(defaultColumns(item))
  }
  return columns
}
const cColumns = getCColumns()

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
    let title = <span>{item.title}</span>
    if (item.tips) {
      title = <Paragraph
        className="table-tips"
        ellipsis={{rows: 1,}}
        title={item.tips}
      >
        {item.title}
      </Paragraph>
    }
    if (item.describe && item.describe.length) {
      title = <Tooltip placement="topRight" title={item.describe.map((text, index) => {
        return <div key={index}>{index+1+'. '}{text}</div>
      })}>
        {title}<QuestionCircleOutlined style={{marginLeft: 4}} />
      </Tooltip>
    } else if (item.description) {
      title = <Tooltip placement="topRight" title={item.description}>
        {title}<QuestionCircleOutlined style={{marginLeft: 4}} />
      </Tooltip>
    }
    const column = {
      title: title,
      width: isHeader ? 100 : DefaultWidth,
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
    let isShowLine = false
    for (let record of data) {
      let endDate = record.ENDDATE
      const data = item.algorithm(record)
      const describe = item.describe
      const value = valueFormat(data.value, item.type)
      let text = ''
      const describeText = describe[data.type] || describe[describe.length - 1]
      if (describeText) {
        isShowLine = true
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
    if (isShowLine) {
      textArr.push(<Divider />)
    }
  }
  textArr.pop()
  return textArr
}

// const assetsAnalysisColums = getAssetsAnalysisColums()

function getAssetsAnalysisRenderData(data) {
  const list = [
    {
      title: '资产负债表',
      type: 'f',
      columns: fColumns
    },
    {
      title: '利润表',
      type: 'p',
      columns: pColumns
    },
    {
      title: '现金流量表',
      type: 'c',
      columns: cColumns
    },
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
  getFColumns() {
    return fColumns
  },
  // getAssetsAnalysisColums() {
  //   return assetsAnalysisColums
  // },
  getAssetsAnalysisList(data) {
    return getAssetsAnalysisRenderData(data)
  },

  filterData(data = []) {
    const fData = []
    for(let item of data) {
      if (item.ENDDATE.match(/\-12\-31$/g)) {
        fData.push(item)
      }
    }
    return fData
  },

  dataFormatByYear(data = []) {
    const yearMap = {}
    const formatData = []
    for(let item of data) {
      if (item.ENDDATE.match(/\-12\-31$/g)) {
        const year = parseInt(item.ENDDATE.split('-')[0])
        yearMap[year] = item
        if (yearMap[year - 1]) {
          item.prevYear = yearMap[year - 1]
          item.prevYear.nextYear = item
        }
        formatData.push(item)
      }
    }
    return {
      data: formatData,
      map: yearMap
    }
  },

  dataFormat(data = [], pData = [], cData = []) {
    const {data: cdata, map: cMap} = util.dataFormatByYear(cData)
    const {data: pdata, map: pMap} = util.dataFormatByYear(pData)
    const {data: fdata} = util.dataFormatByYear(data)
    for(let item of fdata) {
      const year = parseInt(item.ENDDATE.split('-')[0])
      item.pData = pMap[year]
      item.cData = cMap[year]
    }
    return [fdata, pdata, cdata]
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

  getTitleAndCode(data) {
    const item = data[0] || {}
    const title = item.SECNAME
    const code = item.SECCODE
    return {
      title,
      code,
    }
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
  getProfitData({
    scode,
    sdate,
    edate,
    token
  }) {
    return util.fetch('http://webapi.cninfo.com.cn/api/stock/p_stock2301', {
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
  getCashData({
    scode,
    sdate,
    edate,
    token
  }) {
    return util.fetch('http://webapi.cninfo.com.cn/api/stock/p_stock2302', {
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
    return new Promise((resolve) => {
      window.localStorage.setItem('finance_data', JSON.stringify(data))
      resolve()
    })
  },

  getLocalFinanceData() {
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

  setLocalData(data) {
    return new Promise((resolve) => {
      window.localStorage.setItem('table_data', JSON.stringify(data))
      resolve()
    })
  },
  getLocalData() {
    return new Promise((resolve) => {
      let data = window.localStorage.getItem('table_data')
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
  downPageImg(node, fileName) {
    return html2canvas(node).then(function(canvas) {
      const aLink = document.createElement('a')
      const img = canvas.toDataURL('image/png').split(',')[1]
      const imgFile = util.base64ToBlob(img, 'image/png')
      aLink.download = fileName || '报表'
      aLink.href = URL.createObjectURL(imgFile)
      aLink.click()
      URL.revokeObjectURL(imgFile)
    })
  },
}

export const useGetFinanceData = () => {
  const [tableData, setTableData] = useState(() => {
    return null
  })
  const [error, setError] = useState(() => {
    return null
  })
  const [loading, setLoading] = useState(() => {
    return false
  })
  const getCurrentTableData = useCallback(({
    scode,
    sdate,
    edate
  }) => {
    setLoading(true)
    return util.getToken().then((token) => {
      const param = {
        scode,
        sdate,
        edate,
        token
      }
      return Promise.all([
        util.getLocalData(),
        util.getFinanceData(param),
        util.getProfitData(param),
        util.getCashData(param),
      ]).then(([localData, fData, pData, cData]) => {
        const {title, code} = util.getTitleAndCode(fData)
        if (!localData) {
          localData = {}
        }
        localData[`${title}(${code})`] = {
          name: `${title}(${code})`,
          title: title,
          code: code,
          fData: util.filterData(fData),
          pData: util.filterData(pData),
          cData: util.filterData(cData),
        }
        setTableData(localData[`${title}(${code})`])
        util.setLocalData(localData)
        setLoading(false)
        return localData[`${title}(${code})`]
      })
    }).catch((err) => {
      setError(err)
      setLoading(false)
    })
  }, [])
  return {
    getCurrentTableData,
    tableData,
    error,
    loading,
  }
}

export default util
