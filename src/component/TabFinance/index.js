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

  const reload = useCallback(() => {
    util.getLocalData().then((data) => {
      if (data) {
        const arr = []
        for (let key in data) {
          arr.push(data[key])
        }
        setTabData(arr)
      }
    })
  }, [setTabData])

  useEffect(() => {
    reload()
  }, [reload])

  return {
    tabData,
    activeKey,
    add,
    remove,
    onChange,
    reload,
  }
}

function TabFinance(props) {
  const { tabData = [], activeKey, onChange, remove, reload } = props
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
        const name = item.name
        return <TabPane tab={name} key={index + ''}>
          <FinanceTable
            name={name}
            title={item.title}
            code={item.code}
            data={item}
            reload={reload}
          />
        </TabPane>
      })}
    </Tabs>
  );
}

export default TabFinance
