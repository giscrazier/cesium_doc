/**
 * 公共的Service，根据传递进来的API，自动制定增删改查方法
 * Created by 姚应龙 on 2018/8/3
 */
import modelEnhance from "../utils/modelEnhance";
import IBaseService from "./IBaseService";

// 公共API
const _API = {};

export default class BaseService implements IBaseService{
    constructor(private API:{
        DEL: string,
        ADD: string,
        UPDATE: string,
        LIST: string,
        DETAIL: string
    }) {
        this.API = Object.assign({}, API, _API);
    }

    // 新增
    public add(payload:object):Promise<any> {
        return this.execute('add', payload);
    }

    // 删除
    public del(payload: object):Promise<any> {
        return this.execute('del', payload);
    }

    // 更新
    public update(payload:object):Promise<any> {
        return this.execute('update', payload);
    }

    // 详情
    public detail(payload:object): Promise<any> {
        return modelEnhance({
            notice: false,
            payload,
            url: this.API.DETAIL
        });
    }

    // 查询列表
    public list(payload:object) {
        return modelEnhance({
            notice: false,
            payload,
            url: this.API.LIST
        });
    }

    // 内部方法
    private execute(type:string, payload:object) {
        let url = null;
        switch (type) {
            case 'add':
                url = this.API.ADD;
                break;
            case 'del':
                url = this.API.DEL;
                break;
            case 'update':
                url = this.API.UPDATE;
                break;
        }
        if (!url) {
            throw new Error('没有匹配的url，' + type);
        }
        return modelEnhance({
            notice: true,
            payload,
            url
        });
    }
}