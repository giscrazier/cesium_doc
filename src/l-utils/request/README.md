# Request
简单保障的 Fetch

## API
- requestConfig 配置所有默认选项
- requestHeaders 设置headers, 支持 object | key-value | function 类型参数
- send 发送请求
- getform, postform, get, post, head, del, put 发送请求(这些都是简化的send)
- 支持jsonp
- 下面为不在$$中的方法
- create 返回新实例
- config 同 requestConfig
- headers 同 requestHeaders
- prefix 设置请求前缀，可在config中设置
- beforeRequest 请求前hook
- afterResponse 响应后hook
- contentType 设置content-type

## 使用
```javascript
import $$ from 'Lutils';

// 发送请求
$$.send('/send');
$$.get('/get/1');
$$.post('/post');
$$.put('/put');
$$.del('/put/1');
$$.jsonp('abc.jsonp').then(resp => resp.json());
```
# 默认选项
```javascript
{
    method: 'POST',         // default 'POST'
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'include',
    headers: {
      'content-type': 'application/json'
    },
    responseType: 'json',   // text or blob or formData https://fetch.spec.whatwg.org/
    prefix: '',             // request prefix
    beforeRequest: null,    // before request check, return false or a rejected Promise will stop request
    afterResponse: null,    // after request hook
  }
```
## 基本使用
### 简化写法
```javascript
// 原始fetch 写法
fetch('http://httpbin.org/post', {
  method: 'POST',
  headers: {
    'content-type': 'application/json'
  },
  body: JSON.stringify({
    name: 'weiq',
  })
})
.then(function(response) {
  if (response.status >= 200 && response.status < 300) {
    return response.json()
  }
  throw new Error(response.statusText)
})
.then(function(json) {
  // ...
});

// 等价于，直接使用send方法
$$.send('http://httpbin.org/post', {
    method: 'POST',
    data: {name: 'weiq'}
  }).then(resp => {
    console.log(resp.json) // {name: 'weiq'}
  })

// 等价于，使用提供的post方法
$$.post('http://httpbin.org/post', {name: 'weiq'})
  .then(resp => {
    console.log(resp.json) // {name: 'weiq'}
  })
```
### 提交form表单
```javascript
// 提交form表单
$$.getform('/form', {name: 'weiq'}) // 将拼接到url后面
  //.postform('/form', {name: 'weiq'}) // 将做为Form Data发送
  .then(resp => {
    console.log(resp.json) // {name: 'weiq'}
  })
```
### 全局配置, 将会覆盖默认参数, 一般全局配置一次
```javascript
// 全局配置, 将会覆盖默认参数, 一般全局配置一次
$$.requestConfig('method', 'GET')
  .requestConfig({
    headers: {'content-type': 'application/json'},
    prefix: '/api'
  })
// 配置请求头
$$.requestHeaders('Accept', 'application/json')  // key-value
  .requestHeaders({ Accept: 'application/json' }) // json

// 用函数反回头
$$.requestHeaders(_ => ({
    random: Math.random()
  }))
```
### 临时改变配置项
```javascript
$$.post('http://httpbin.org/post', {name: 'weiq'}, {
    headers: {
      'content-type': 'application/json'
    },
    responseType: 'json',
  })
  .then(resp => {
    console.log(resp.json) // {name: 'weiq'}
  })
```