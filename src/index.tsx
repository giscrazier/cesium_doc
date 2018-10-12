import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './assets/styles/index.less';
import config from './config';
// import './index.css';
import $$ from './l-utils';
import request from './l-utils/request';
import registerServiceWorker from './registerServiceWorker';

const store = $$.store;

// -> 配置请求请求
request.config(config.request).headers(() => ({
    // userId: store('userId'),
    sessionId: store.get('user') && store.get('user').token
}));

// 使用mock数据
// require('./__mocks__');

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
