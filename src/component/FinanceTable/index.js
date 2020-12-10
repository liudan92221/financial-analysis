import { Table, Card } from 'antd';
import './index.less';

function FinanceTable(props) {
  const { dataSource, renderList = [] } = props

  return (
    <div className="finance-table">
      {renderList && renderList.map((item, index) => {
        return <Card
          className="table-card"
          key={index}
          title={item.title}
          bordered={false}
        >
          <Table
            rowKey="ENDDATE"
            columns={item.columns}
            dataSource={dataSource}
            scroll={{ y: 300 }}
            bordered
            pagination={false}
          />
          <div className="table-text-area">
            {item.textArr && item.textArr.length ? <div className="text-title">分析判断如下</div> : ''}
            {item.textArr}
          </div>
        </Card>
      })}
    </div>
  );
}

export default FinanceTable
