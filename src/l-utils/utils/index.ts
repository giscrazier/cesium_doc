
/**
 * 生成指定位数的随机数
 * @param x
 */
export function randomStr(x:number) {
  let s = '';
  while (s.length < x && x > 0) {
    const v = Math.random() < 0.5 ? 32 : 0;
    s += String.fromCharCode(Math.round(Math.random() * ((122 - v) - (97 - v)) + (97 - v)));
  }
  return s;
}

/**
 * 对像转成url查询字符串
 * @param {object} obj 
 */
export function param(obj:any) {
  const arr = Object.keys(obj).map((k) => {
    return k + '=' + encodeURIComponent(obj[k])
  })
  return arr.join('&').replace(/%20/g, '+')
}

/**
 * 查询字符串转为对象
 * @return {object} {key1: value1, key2: value2}
 */
export function getQueryObject() {
  return ((a:string[]) => {
    const b = {};
    a.forEach(c=>{
        const p = c.split('=');
        if (p.length === 2) {
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, ' '));
        }

    });
    /*for (let i = 0; i < a.length; ++i) {
      const p = a[i].split('=');
      if (p.length != 2) continue;
      b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, ' '));
    }*/
    return b;
  })(window.location.search.slice(1).split('&'));
}

/**
 * 取查询字符串中某一个name的value
 * @param {string} name 
 * @param {string} url
 * @return {string}
 */
export function getQueryValue(name:string, url:string):string|null {
  if (!url) {
      url = window.location.href;
  }
  name = name.replace(/[\[\]]/g, "\\$&");
  const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
  const results = regex.exec(url);
  if (!results) {
      return null;
  }
  if (!results[2]) {
      return '';
  }
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}


/**
 * 延时任意毫秒
 * @param {number} time 毫秒
 * 例：
 *   delay(500).then(() => console.log('after 500ms'))
 */
export function delay(time = 0) {
  return new Promise((res) => setTimeout(res, time));
}

/**
 * 创建并返回一个像节流阀一样的函数，当重复调用函数的时候，最多每隔 wait毫秒调用一次该函数
 * @param func 执行函数
 * @param wait 时间间隔
 * @param options 如果你想禁用第一次首先执行的话，传递{leading: false}，
 *                如果你想禁用最后一次执行的话，传递{trailing: false}
 * @returns {Function}
 */
export function throttle(func:any, wait:any, options:any) {
  let context:any;
  let args:any;
  let result:any;
  let timeout:any = null;
  let previous = 0;
  if (!options) {
      options = {};
  }
  const later = () => {
    previous = options.leading === false ? 0 : new Date().getTime();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) {
        context = args = null;
    }
  };
  return function() {
    const now = new Date().getTime();
    if (!previous && options.leading === false){
        previous = now;
    }
    const remaining = wait - (now - previous);
    // @ts-ignore
      context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout) {
          context = args = null;
      }
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
}

/**
 * 防反跳。func函数在最后一次调用时刻的wait毫秒之后执行！
 * @param func 执行函数
 * @param wait 时间间隔
 * @param immediate 为true，debounce会在wai 时间间隔的开始调用这个函数
 * @returns {Function}
 */
export function debounce(func:any, wait:number, immediate:boolean):any {
  let timeout:any;
  let args:any;
  let context:any;
  let timestamp:any;
  let result:any;

  const  later = () => {
    const last = new Date().getTime() - timestamp; // timestamp会实时更新

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        if (!timeout) {
            context = args = null;
        }
      }
    }
  };

  return function() {
    // @ts-ignore
      context = this;
    args = arguments;
    timestamp = new Date().getTime();
    const callNow = immediate && !timeout;

    if (!timeout) {
      timeout = setTimeout(later, wait);
    }
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }
    return result;
  };
}

