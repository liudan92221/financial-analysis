import { useState, useCallback, useEffect } from 'react';
import { Tabs } from 'antd';
import FinanceTable from '../FinanceTable'
import util from '../../util/index';

const { TabPane } = Tabs;

export const useTabData = () => {
  const [tabData, setTabData] = useState(() => {
    return []
  })
  const [activeKey, setActiveKey] = useState(() => {
    return '0'
  })

  const onChange = useCallback((activeKey) => {
    setActiveKey(activeKey)
  }, [])

  const add = useCallback((data) => {
    const newTabData = [ ...tabData ]
    const item = data[0] || {}
    const title = item.SECNAME
    const code = item.SECCODE
    newTabData.push({
      title,
      code,
      assetsDataSource: data
    })
    setActiveKey(newTabData.length - 1 + '')
    util.setLocalFinanceData(newTabData)
    setTabData(newTabData)
  }, [tabData, setTabData])

  const remove = useCallback((index) => {
    const newTabData = [ ...tabData ]
    newTabData.splice(index, 1)
    if (activeKey === index) {
      setActiveKey('0')
    }
    util.setLocalFinanceData(newTabData)
    setTabData(newTabData)
  }, [tabData, activeKey, setTabData])

  useEffect(() => {
    util.getLocalFinanceData().then((data) => {
      if (Array.isArray(data)) {
        setTabData(data)
      }
    })
  }, [])

  return {
    tabData,
    activeKey,
    add,
    remove,
    onChange,
  }
}

function TabFinance(props) {
  const { tabData = [], activeKey, onChange, remove } = props
  const onEdit = useCallback((index, action) => {
    if (typeof remove === 'function' && action === 'remove') {
      remove(index)
    }
  }, [remove])

  return (
    <Tabs
      hideAdd
      activeKey={activeKey}
      onChange={onChange}
      onEdit={onEdit}
      type="editable-card"
    >
      {tabData.map((item, index) => {
        return <TabPane tab={`${item.title}(${item.code})`} key={index + ''}>
          <Tabs
            hideAdd
            defaultActiveKey="1"
            type="card"
          >
            <TabPane tab="资产负债表" key="1">
              <FinanceTable
                dataSource={item.assetsDataSource}
                renderList={util.getAssetsAnalysisList(item.assetsDataSource)}
              />
            </TabPane>
            <TabPane tab="利润表" key="2"></TabPane>
            <TabPane tab="现金流量表" key="3"></TabPane>
          </Tabs>
        </TabPane>
      })}
    </Tabs>
  );
}

export default TabFinance
