import { Table } from 'antd';
import util from '../../util/index';
// import './App.less';

function FinanceTable(props) {
  const { title, dataSource } = props
  return (
    <div>
      <Table
        title={() => title}
        columns={util.getColumns()}
        dataSource={dataSource}
        scroll={{ x: 1500, y: 300 }}
        bordered
        pagination={false}
      />
    </div>
  );
}

export default FinanceTable
