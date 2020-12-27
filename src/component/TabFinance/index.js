import { useCallback } from 'react';
import { Tabs } from 'antd';
import FinanceTable from '../FinanceTable'

const { TabPane } = Tabs;

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
        const name = item.name
        return <TabPane tab={name} key={index + ''}>
          <FinanceTable
            name={name}
            title={item.title}
            code={item.code}
            data={item}
          />
        </TabPane>
      })}
    </Tabs>
  );
}

export default TabFinance
