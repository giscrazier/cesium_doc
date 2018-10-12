import * as store from 'store2';
import RequestMethodEnum from "../../enum/RequestMethodEnum";
import { isFunction, isObject } from '../type';
import {param} from '../utils'
import RequestError from './error';
import IResponse from "./IResponse";

export const REQUEST_METHODS = [
  'GET', 'POST', 'HEAD', 'DELETE', 'OPTIONS', 'PUT', 'PATCH'
];

export interface IOptions {
    method: RequestMethodEnum;
    mode: 'cors' | 'same-origin' | 'no-cors';
    cache: 'no-cache';
    // credentials: 'include',
    headers: any;
    responseType: 'json' | 'text' | 'blob' | 'formData';   // text or blob or formData https://fetch.spec.whatwg.org/
    prefix: string;             // request prefix
    beforeRequest: (url: string, optioins:any)=>boolean;   // before request check, return false or a rejected Promise will stop request
    afterResponse: (response:IResponse, info?:any)=>IResponse,    // after request hook
    errorHandle: (e:Error, info?:any)=>boolean,      // global error handle, 返回false是会再向上抛出错误
    withHeaders: any,      // function & object, every request will take it
}

export default class Request {
    public jsonp:any;

  private opts:IOptions;
  /**
   * default options
   */
  private defaultOptions:IOptions = {
    method: RequestMethodEnum.POST,         // default
    mode: 'cors',
    cache: 'no-cache',
    // credentials: 'include',
    headers: {
      'content-type': 'application/json'
    },
    responseType: 'json',   // text or blob or formData https://fetch.spec.whatwg.org/
    prefix: '',             // request prefix
    beforeRequest: ()=>true,    // before request check, return false or a rejected Promise will stop request
    afterResponse: (resp)=>resp,    // after request hook
    errorHandle: ()=>true,      // global error handle
    withHeaders: null,      // function & object, every request will take it
  };

  constructor(opts = {}) {
    this.opts = {
      ...this.defaultOptions,
      ...opts
    };

    // normalize the headers
    const headers = this.opts.headers;

    for (const h in headers) {
      if (h !== h.toLowerCase()) {
        headers[h.toLowerCase()] = headers[h];
        delete headers[h];
      }
    }

    REQUEST_METHODS.forEach((method) => {
      this[method.toLowerCase()] = (url:string, data:any, options:any = {}) => {
        options.data = data;
        return this.send(url, { ...options, method });
      }
    })
  }

  public create = (opts:IOptions) => {
    return new Request(opts);
  };

  /**
   * Set Options
   *
   * Examples:
   *
   *   .config('method', 'GET')
   *   .config({headers: {'content-type': 'application/json'}})
   *
   * @param {String|Object} key
   * @param {Any} value
   * @return {Request}
   */
  public config = (obj:{
      [propName: string]: any;
  }):Request => {
    const options = this.opts;

      for (const k in obj) {
          if (obj.hasOwnProperty(k)) {
              options[k] = obj[k];
          }

      }

    return this;
  };

  public prefix = (prefix:string):Request => {
    if (prefix && typeof prefix === 'string') {
        this.opts.prefix = prefix;
    }
    return this;
  };

  public beforeRequest = (cb:(url: string, optioins:any)=>boolean):Request => {
    const options = this.opts;
      options.beforeRequest = cb;
    return this;
  };

  public afterResponse = (cb:(response:IResponse, info?:any)=>IResponse) => {
    const options = this.opts;
      options.afterResponse = cb;
    return this;
  }

  public errorHandle = (cb:(e:Error, info?:any)=>boolean) => {
    const options = this.opts;
      options.errorHandle = cb;
    return this;
  };

  public withHeaders = (cb:any) => {
    const options = this.opts;
      options.withHeaders = cb;
    return this;
  };

  /**
   * Set headers
   *
   * Examples:
   *
   *   .headers({ Accept: 'application/json' })
   *
   * @param {String} key
   * @param {String} value
   * @return {Request}
   */
  public headers = (obj:{
      [propName: string]: any;
  }) => {
      const { headers } = this.opts;

      for (const k in obj) {
          if (obj.hasOwnProperty(k)) {
              headers[k.toLowerCase()] = obj[k];
          }

      }

    return this;
  };

  /**
   * Set Content-Type
   *
   * @param {String} type
   */
  public contentType = (type:string) => {
    const { headers } = this.opts;

    switch (type) {
      case 'json':
        type = 'application/json';
        break;
      case 'form':
      case 'urlencoded':
        type = 'application/x-www-form-urlencoded;charset=UTF-8';
        break;
      case 'multipart':
        type = `multipart/form-data; boundary=${Math.ceil(Math.random()*1000000000000)}`;
        break;
    }

    headers['content-type'] = type;
    return this;
  };

  /**
   * GET send form
   */
  public getform = (url:string, data:any, opts:any = {}) => {
    opts.data = data;
    return this.send(url, {
      ...opts,
      method: 'GET',
      headers: {
        ...this.opts.headers,
        ...opts.headers,
        'content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
      }
    });
  };

  /**
   * POST send form
   */
  public postform = (url:string, data:any, opts:any = {}) => {
    opts.data = data;
    return this.send(url, {
      ...opts,
      method: 'POST',
      headers: {
        ...this.opts.headers,
        ...opts.headers,
        // 'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
          'content-type': `multipart/form-data; boundary=${Math.ceil(Math.random()*1000000000000)}`
        //  'content-type': ''
      }
    });
  }

  // send request
  public send = (url:string, opts:any = {}) => new Promise((resolve, reject) => {
    if (typeof url !== 'string') {
      return reject(new RequestError('invalid url', 'invalidURL'));
    }

    let { data, ...otherOpts } = opts;

      if (false) {
          otherOpts=null;
      }

    const options = { ...this.opts, ...otherOpts };

    const { beforeRequest, afterResponse, errorHandle, responseType, prefix, headers, withHeaders, ...fetchOpts } = options;

    if (beforeRequest(url, options) === false) {
      return reject(new RequestError('request canceled by beforeRequest', 'requestCanceled'));
    }

    const { __headersFun__, ...realheaders } = headers;
    let newheaders = { ...realheaders };

      newheaders = { ...newheaders, ...withHeaders };

    if (__headersFun__) {
      const newheaders2 = __headersFun__();
      if (newheaders2 && isObject(newheaders2)) {
        newheaders = { ...newheaders, ...newheaders2 };
      }
    }

    const contentType = newheaders['content-type'];

    // todo 这里和后台协商，把sessionid放到header中，放到这里，太丑了
      data = Object.assign({}, data, {sessionId: store.get('user') && store.get('user').token});

    const body = this.data(data, contentType);

    if (contentType.indexOf('application/json') !== -1) {
      fetchOpts.body = JSON.stringify(body);
    } else if (contentType.indexOf('application/x-www-form-urlencoded') !== -1) {
      fetchOpts.body = param(body);
    } else {
      // delete newheaders['content-type'];
      fetchOpts.body = body;
    }

    // if 'GET' request, join _body of url queryString
    if (fetchOpts.method.toUpperCase() === 'GET' && body) {
      if (url.indexOf('?') >= 0) {
        url += '&' + param(body);
      } else {
        url += '?' + param(body);
      }
      delete fetchOpts.body;
    }

    let nextURL = prefix + url;
    if (/^(http|https|ftp)\:\/\//.test(url)) {
      nextURL = url;
    }
    
    return fetch(nextURL, { headers: newheaders, ...fetchOpts })
      .then(resp => this.__checkStatus(resp))
      .then(resp => this.__parseResponse(resp, responseType))
      .then(resp => this.__afterResponse(resp, afterResponse, {prefix, url, ...fetchOpts}))
      .then(response =>resolve(response))
        .catch(e =>{this.__errorHandle(e, errorHandle, reject, {prefix, url, ...fetchOpts})})
      ;
  })

  private __checkStatus(response:any) {
    if (response.status >= 200 && response.status < 300) {
      if (response.status === 204) {
        return null;
      }
      return response;
    }
    const errortext = response.statusText;
    const error = new RequestError(errortext, response.status);
    error.response = response;
    throw error;
  }

    private __parseResponse(response:any, responseType:any) {
    return (response && isFunction(response[responseType])) ? response[responseType]() : response;
  }

    private __afterResponse(response:any, afterResponse:any, info:any) {
      const after = afterResponse(response, info);
      return after;
  }

    private __errorHandle(e:any, errorHandle:any, reject:any, info:any) {
    if (e.name !== 'RequestError') {
      e.name = 'RequestError';
      e.code = 0;
    }
    if (errorHandle(e, info) !== false) {
      reject(e);
    }
  }
    private data = (data:any, contentType:string) => {
        let body = null;

        // if FormData
        if (contentType.indexOf('multipart/form-data') !== -1) {
            body = new FormData();

            if (data instanceof FormData) {
                body = data;
                return body;
            }

            if (typeof data === 'object') {
                for (const k in data) {
                    if (data.hasOwnProperty(k)) {
                        body.append(k, data[k]);
                    }

                }
            }
        } else {
            if (body && typeof data === 'object') {
                for (const key in data) {
                    if (data.hasOwnProperty(key)) {
                        // @ts-ignore
                        body[key] = data[key];
                    }

                }
            } else {
                body = data;
            }
        }

        return body;
    };
}