
/**
 * 分页对象
 */
export default class PageInfo {
  // 页码，从1开始
  public pageNum = 1;

  // 每页数量
  public pageSize = 10;

  // 当前页的数量
  public size = 0;

  // 总记录数
  public total = 0;

  // 总页数
  public totalPages = 0;

  // 结果集
  public list = [];

  // 过滤条件 {name: 'jonn'}
  public filters = {};

  // 排序条件 {name: 'asc', age: 'desc'}
  public sorts = {};

  /**
   * 希望用户输入的页数不在合法范围（第一页到最后一页之外）
   * 时能够正确的响应到正确的结果页面，那么你可以配置reasonable为true，
   * 这时如果pageNum<1,会查询第一页，如果pageNum>总页数,会查询最后一页
   */
  public reasonable = false;

  /**
   * 组装分页信息
   * @param {number} pageNum page number, default 1
   * @param {number} pageSize page size, default 10
   */
  public startPage(pageNum:number = 1, pageSize:number = 10):PageInfo {
    this.pageNum = pageNum;
    this.pageSize = pageSize;
    return this;
  }

  /**
   * 组装分页信息
   * @param {number} pageNum page number
   * @param {number} pageSize page size
   */
  public jumpPage(pageNum:number, pageSize:number):PageInfo {
    if ((pageNum && pageNum <= this.totalPages) || pageNum === 1) {
      this.pageNum = pageNum;
      if (pageSize) { this.pageSize = pageSize; }
    }
    return this;
  }

  /**
   * 拼接过滤条件
   * @param {object} q 过滤条件 {name: 'jonn', sex: 1}
   * @param {boolean} merge 是否将新条件与现有条件合并
   */
  public filter(q:object, merge:boolean=false):PageInfo {
      if (merge) {
          this.filters = {...this.filters, ...q};
      } else {
          this.filters = q;
      }
    return this;
  }

  /**
   * 拼接排序条件
   * @param {object} q 排序字段 {name: 'asc', age: 'desc'}
   */
  public sortBy(q:object):PageInfo {
      this.sorts = q;
    return this;
  }

  /**
   * 下一页或指定页数
   * @param {number} pageNum 
   */
  public nextPage(pageNum:number):PageInfo {
    if (this.totalPages !== -1) {
      if (pageNum && pageNum <= this.totalPages) {
        this.pageNum = pageNum;
      } else if (this.pageNum + 1 <= this.totalPages) {
        this.pageNum ++;
      }
    } else {
      this.pageNum = this.totalPages;
    }
    return this;
  }

  /**
   * 上一页
   */
  public prevPage():PageInfo {
    if (this.totalPages !== -1) {
      if (this.pageNum - 1 > 0) {
        this.pageNum --;
      }
    } else {
      this.pageNum = 1;
    }
    return this;
  }

  // deprecate
  /*public send(url:string, options:object) {
    const self = this;
    const { pageNum, pageSize, filters, sorts } = this;
    let data = { pageNum, pageSize, filters, sorts };

      data = PageHelper.requestFormat(this);
    return $$.send(url, { data, ...options }).then((resp:object) => {
        const newPageInfo = PageHelper.responseFormat(resp);
        return Object.assign(self, newPageInfo);
    })
  }*/
} 