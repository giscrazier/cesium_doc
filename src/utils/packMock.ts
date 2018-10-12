// http://www.wheresrhys.co.uk/fetch-mock/api
// http://mockjs.com/
import * as fetchMock from 'fetch-mock';
import * as Mock from 'mockjs';
import 'whatwg-fetch'
import config from '../config';
import $$ from '../l-utils';

const mock = Mock.mock;

/**
 * 模拟延时请求
 * @param {any} response 模拟响应数据
 * @param {number} time 延时多少毫秒，省略这个省数将会生成100ms内的一个延时
 */
const delay = (response:any, time:any) => {
    return new Promise(resolve => setTimeout(()=>resolve(),time)).then(() => response);
    // return () => setTimeout(() => response, time || Math.random() * 100)
  // return () => $$.delay(time || Math.random() * 100).then(() => response)
};

// 模拟数据时包装反回数据
const toSuccess = (response:any, time:any) => {
  if (time) {
    return delay(config.mock.toSuccess(response), time);
  } else {
    return config.mock.toSuccess(response);
  }
};

const toError = (message:string, time:Date) => {
  if (time) {
    return delay(config.mock.toError(message), time);
  } else {
    return config.mock.toError(message);
  }
};

export default (...mocks:any[]) => {

    /**
     * 配置如果没拦截到直接走原生的fetch方法
     */
    fetchMock.configure({
      fallbackToNetwork: true,
      warnOnFallback: false
  });

  /*fetchMock.config = {
    ...fetchMock.config, 

  };*/

  mocks.forEach(mockFile => {
    let mockAPIs = {};
    if ($$.isFunction(mockFile)) {
      mockAPIs = mockFile({delay, mock, toSuccess, toError});
    } else if ($$.isObject(mockFile)) {
      mockAPIs = mockFile;
    } else {
      throw new Error('mock file require both Function or Object');
    }

    for (const key in mockAPIs) {
      if (mockAPIs.hasOwnProperty(key)) {
          const methodUrl = key.split(" ");

          // 'GET /api/getUserInfo'
          let method = 'mock';
          let url = null;
          if (methodUrl.length === 2) {
              method = methodUrl[0].toLowerCase();
              url = methodUrl[1];
          } else {
              url = methodUrl[0];
          }

          /**
           * 如果想要针对请求时的参数，反回不同的数据，比如翻页
           * 时解析body体里的页数，或查询条件，反回对应的数据，
           * 这时可以把mock写成函数形式，这时会接收发送fetch时的
           * options做为参数 fetch(url, options)
           */
          if ($$.isFunction(mockAPIs[key])) {
              fetchMock[method](url, (url2:string, options:any) => mockAPIs[key]({url2, ...options}));
          } else {
              mock(url, method, mockAPIs[key]);
          }
      }
      }
  })
}

export {mock};