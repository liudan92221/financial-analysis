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
    newTabData.push(data)
    setActiveKey(newTabData.length - 1 + '')
    setTabData(newTabData)
  }, [tabData, setTabData])

  const remove = useCallback((index) => {
    const newTabData = [ ...tabData ]
    newTabData.splice(index, 1)
    if (activeKey === index) {
      setActiveKey('0')
    }
    setTabData(newTabData)
  }, [tabData, activeKey, setTabData])

  useEffect(() => {
    util.getLocalData().then((data) => {
      if (data) {
        const arr = []
        for (let key in data) {
          arr.push(data[key])
        }
        setTabData(arr)
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
        const title = item.name
        return <TabPane tab={title} key={index + ''}>
          <FinanceTable
            title={title}
            data={item}
          />
        </TabPane>
      })}
    </Tabs>
  );
}

export default TabFinance
