import { Tabs } from 'antd';
import Main from './main'
import My from './my'
import './App.less';

const { TabPane } = Tabs;

function App() {
  return (
    <div className="app-block">
      <Tabs defaultActiveKey="1">
        <TabPane tab="财报分析" key="1">
          <Main />
        </TabPane>
        <TabPane tab="设置" key="2">
          <My />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default App;
