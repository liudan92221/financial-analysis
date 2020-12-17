import React from 'react';
import ReactDOM from 'react-dom';
import HashRouter, { history } from './history'
import App from './App';

import './index.less';

function Main() {
  return <App history={history} />
}

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Main />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
