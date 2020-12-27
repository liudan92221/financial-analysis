import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil'
import HashRouter, { history } from './history'
import App from './App';

import './index.less';

function Main() {
  return <RecoilRoot>
    <App history={history} />
  </RecoilRoot>
}

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Main />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
