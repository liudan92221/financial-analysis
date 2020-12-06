import { Tabs } from 'antd';
import Main from './main'
import 'antd/dist/antd.css';
import './App.less';

const { TabPane } = Tabs;

function App() {
  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="财报分析" key="1">
        <Main />
      </TabPane>
    </Tabs>
  );
}

export default App;
