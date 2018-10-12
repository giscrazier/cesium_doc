import * as fetchJsonp from 'fetch-jsonp';
import Request from './request';

const request = new Request();
request.jsonp = fetchJsonp;

if (typeof window.fetch === 'undefined') {
  require('whatwg-fetch');
}

// singleton
export default request;
