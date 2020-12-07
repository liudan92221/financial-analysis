import { Typography } from 'antd';
import { keyArr, keyMap } from './config'

const { Paragraph } = Typography;

function getColums() {
  const columns = []
  for(let item of keyArr) {
    const column = {
      title: <Paragraph
        ellipsis={{rows: 1,}}
        title={`${item.alias}`}
      >
        {item.alias}
      </Paragraph>,
      width: item.width || 120,
      dataIndex: item.keywordName,
      key: item.keywordName,
      render(text) {
        if (typeof text === 'number') {
          return <div className='text-right'>{text}</div>
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

const columns = getColums()
const util = {
  getColumns() {
    return columns
  },

  dataFormat(data) {
    const fData = []
    for(let item of data) {
      if (item.ENDDATE.match(/\-12\-31$/g)) {
        fData.push(item)
      }
    }
    console.log(fData)
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
      window.chrome.storage.sync.get({
        client_id: '',
        client_secret: '',
      }, function(items) {
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
  }
}

export default util
