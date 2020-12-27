import { useCallback, useState } from 'react';
import { Typography, Tooltip, Divider } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import html2canvas from 'html2canvas'
import XLSX from 'xlsx'
import store from '../store/index'
import { nameMap, nameTokeyMap, fKeyArr, pKeyArr, cKeyArr, assetsMap, numberToThousands } from './config'
const { useStockState, useStockSetState } = store
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
      if (typeof text === 'number' || item.dataType.match(/decimal/gi)) {
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
  for(let item of fKeyArr) {
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

function getAssetsAnalysisRenderData(data, columnMap) {
  const list = [
    {
      title: nameMap.f,
      type: 'f',
      columns: fColumns.concat(columnMap.fColumn)
    },
    {
      title: nameMap.p,
      type: 'p',
      columns: pColumns.concat(columnMap.pColumn)
    },
    {
      title: nameMap.c,
      type: 'c',
      columns: cColumns.concat(columnMap.cColumn)
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
  getAssetsAnalysisList(data, columnMap) {
    return getAssetsAnalysisRenderData(data, columnMap)
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

  getName(title, code) {
    return `${title}(${code})`
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
      resolve(data)
    })
  },
  getLocalData() {
    return new Promise((resolve, reject) => {
      let data = window.localStorage.getItem('table_data')
      try {
        if (data) {
          data = JSON.parse(data)
          resolve(data)
        } else {
          resolve({})
        }
      } catch(err) {
        console.error(err)
        reject(err)
      }
    })
  },
  getLocalList() {
    return util.getLocalData().then((data) => {
      const list = []
      for (let key in data) {
        list.push(data[key])
      }
      return list
    })
  },
  removeLocalItemData(name) {
    return util.getLocalData().then((data) => {
      if (data[name]) {
        data[name] = null
        delete data[name]
        return util.setLocalData(data)
      }
    })
  },
  setItemData(title, code, type, item) {
    const map = {
      f: 'fData',
      p: 'pData',
      c: 'cData',
    }
    if (!map[type]) {
      return Promise.reject(new Error('type is error'))
    }
    const itemData = {
      code,
      title,
    }
    itemData[map[type]] = [item]
    
    return util.setData(itemData)
  },
  mergeItemData(localDataArr, itemArr) {
    const localMap = {}
    for (let localItem of localDataArr) {
      localMap[localItem.ENDDATE] = localItem
    }
    for (let item of itemArr) {
      const ENDDATE = item.ENDDATE
      if (ENDDATE) {
        const localItem = localMap[ENDDATE]
        if (localItem) {
          for (let key in item) {
            if (item[key] !== null || item[key] !== undefined) {
              localItem[key] = item[key]
            }
          }
        } else {
          localDataArr.push(item)
        }
      }
    }
    localDataArr.sort((a, b) => {
      return new Date(a.ENDDATE).getTime() - new Date(b.ENDDATE).getTime()
    })
    return localDataArr
  },
  setData(data) {
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data)
      } catch(err) {
        return Promise.reject(err)
      }
    }
    if (!Array.isArray(data)) {
      data = [data]
    }
    return util.getLocalData().then((localData) => {
      for (let item of data) {
        if (item.code && item.title) {
          const name = util.getName(item.title, item.code)
          const localItemData = localData[name] || {
            name,
            title: item.title,
            code: item.code,
            fData: [],
            pData: [],
            cData: [],
          }
          if (item.fData) {
            localItemData.fData = util.mergeItemData(localItemData.fData, item.fData)
          }
          if (item.pData) {
            localItemData.pData = util.mergeItemData(localItemData.pData, item.pData)
          }
          if (item.cData) {
            localItemData.cData = util.mergeItemData(localItemData.cData, item.cData)
          }
          localData[name] = localItemData
        }
      }
      return util.setLocalData(localData)
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
  downClick(fileName, blob) {
    const aLink = document.createElement('a')
    aLink.download = fileName || ''
    aLink.href = URL.createObjectURL(blob)
    aLink.click()
    URL.revokeObjectURL(blob)
  },
  downPageImg(node, fileName) {
    return html2canvas(node).then((canvas) => {
      const img = canvas.toDataURL('image/png').split(',')[1]
      const imgFile = util.base64ToBlob(img, 'image/png')
      util.downClick(fileName || '报表', imgFile)
    })
  },
  downJSON(fileName, json) {
    const content = JSON.stringify(json)
    const blob = new Blob([content], {type: 'application/json'})
    util.downClick(fileName || '报表', blob)
  },

  nameDataFormat(data, type) {
    const keyArrMap = {
      f: fKeyArr,
      p: pKeyArr,
      c: cKeyArr,
    }
    const keyArr = keyArrMap[type]
    const itemData = {}
    if (keyArr) {
      for (let kValue of keyArr) {
        const alias = kValue.alias
        if (data[alias] !== null || data[alias] !== undefined) {
          itemData[kValue.keywordName] = data[alias]
        } else {
          itemData[kValue.keywordName] = null
        }
      }
    }
    return itemData
  },

  readFile(file, type) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = function(e) {
        const data = e.target.result
        resolve(data)
      }
      reader.onerror = function(err) {
        console.error(err)
        reject(err)
      }
      const map = {
        text: 'readAsText',
        arrayBuffer: 'readAsArrayBuffer',
        binary: 'readAsBinaryString',
        base64: 'readAsDataURL',
      }
      const func = map[type] || map.text
      reader[func](file)
    })
  },

  readFileJSON(file) {
    return util.readFile(file, 'text')
  },

  readFileXLSX(file) {
    return util.readFile(file, 'binary').then((data) => {
      const typeMap = {
        f: 'fData',
        p: 'pData',
        c: 'cData',
      }
      const name = file.name
      if (name) {
        const nameArr = name.match(/(.+)\((\d+)\)/)
        if (nameArr && name.match(/\.xlsx$/)) {
          const title = nameArr[1]
          const code = nameArr[2]
          if (title && code) {
            const workbook = XLSX.read(data, {type: 'binary'})
            const jsonData = {
              name: util.getName(title, code),
              title: title,
              code: code,
            }
            for (let sheetName of workbook.SheetNames) {
              const type = nameTokeyMap[sheetName]
              const typeData = typeMap[type]
              if (typeData) {
                const dataSource = []
                const list = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName])
                for (let item of list) {
                  const itemData = util.nameDataFormat(item, type)
                  dataSource.push(itemData)
                }
                jsonData[typeData] = dataSource
              }
            }
            return jsonData
          }
        }
      }
      throw new Error('文件名有误，格式：股票名称(股票代码).xlsx')
    })
  },

  makeXlsxSheet({title, header, dataSource}) {
    return new Promise((resolve, reject) => {
      try {
        const sheet = XLSX.utils.json_to_sheet(dataSource, {
          header: header
        })
        resolve({
          title,
          sheet,
        })
      } catch(err) {
        reject(err)
      }
    })
  },

  dataToXlsxData(data) {
    function getXlsxData(title, data, keyArr) {
      const header = []
      const dataSource = []
      for (let item of keyArr) {
        header.push(item.alias)
      }
      for (let item of data) {
        const dataItem = {}
        for (let keyItem of keyArr) {
          const key = keyItem.keywordName
          dataItem[keyItem.alias] = item[key] || ''
        }
        dataSource.push(dataItem)
      }
      return {
        title,
        header,
        dataSource,
      }
    }
    const fData = data.fData || []
    const pData = data.pData || []
    const cData = data.cData || []
    return [
      getXlsxData(nameMap.f, fData, fKeyArr),
      getXlsxData(nameMap.p, pData, pKeyArr),
      getXlsxData(nameMap.c, cData, cKeyArr),
    ]
  },

  exportXLSX(fileName, data) {
    if (!Array.isArray(data)) {
      data = [data]
    }
    const sheetP = []
    for (let item of data) {
      if (item.title && Array.isArray(item.header) && Array.isArray(item.dataSource)) {
        const itemP = util.makeXlsxSheet({
          title: item.title,
          header: item.header,
          dataSource: item.dataSource,
        })
        sheetP.push(itemP)
      }
    }
    // 字符串转ArrayBuffer
    function s2ab(s) {
      const buf = new ArrayBuffer(s.length)
      const view = new Uint8Array(buf)
      for (let i = 0; i < s.length; ++i) {
        view[i] = s.charCodeAt(i) & 0xFF
      }
      return buf
    }
    
    return Promise.all(sheetP).then((dataList) => {
      const sheetNames = []
      const sheets = {}
      for (let item of dataList) {
        sheetNames.push(item.title)
        sheets[item.title] = item.sheet
      }
      // 生成excel的配置项
      const wbout = XLSX.write({
        SheetNames: sheetNames,
        Sheets: sheets,
      }, {
        bookType: 'xlsx', // 要生成的文件类型
        bookSST: false, // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
        type: 'binary'
      })
      return new Blob([s2ab(wbout)], {type: 'application/octet-stream'})
    }).then((blob) => {
      util.downClick(`${fileName || '报表'}.xlsx`, blob)
    })
  }
}

export default util

export const useRequestStockData = () => {
  const setStockStateData = useStockSetState()
  const [error, setError] = useState(() => {
    return null
  })
  const [loading, setLoading] = useState(() => {
    return false
  })

  const requestStockData = useCallback(({
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
        util.getFinanceData(param),
        util.getProfitData(param),
        util.getCashData(param),
      ]).then(([fData, pData, cData]) => {
        const {title, code} = util.getTitleAndCode(fData)
        const name = util.getName(title, code)
        return util.setData({
          title,
          code,
          name,
          fData: util.filterData(fData),
          pData: util.filterData(pData),
          cData: util.filterData(cData),
        }).then((localData) => {
          setStockStateData(localData)
          setLoading(false)
          return localData[name]
        })
      })
    }).catch((err) => {
      setError(err)
      setLoading(false)
    })
  }, [setStockStateData])
  return {
    requestStockData,
    error,
    loading,
  }
}

export const useStock = function() {
  const {
    requestStockData,
    error,
    loading,
  } = useRequestStockData()

  const [stockData, setStockStateData] = useStockState()
  const reloadStock = useCallback(() => {
    return util.getLocalData().then((data) => {
      if (data) {
        setStockStateData(data)
      }
    })
  }, [setStockStateData])

  const setStockItem = useCallback((title, code, type, item) => {
    return util.setItemData(title, code, type, item).then((data) => {
      if (data) {
        setStockStateData(data)
      }
    })
  }, [setStockStateData])

  const setStockData = useCallback((data) => {
    return util.setData(data).then((localData) => {
      setStockStateData(localData)
    })
  }, [setStockStateData])

  const initStockData = useCallback(() => {
    return util.getLocalData().then((localData) => {
      setStockStateData(localData)
    })
  }, [setStockStateData])

  return {
    stockData,
    setStockStateData,
    reloadStock,
    setStockItem,
    setStockData,
    initStockData,

    requestStockData,
    error,
    loading,
  }
}
