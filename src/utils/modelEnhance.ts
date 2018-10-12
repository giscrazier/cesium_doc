/**
 * Created by 姚应龙 on 2018/7/29
 */
import config from '../config';
import {request} from '../l-utils';
import IResponse from "../l-utils/request/IResponse";
import PageInfo from './pageHelper/PageInfo';

export interface IPayload{
    data: PageInfo|object; // 请求参数，如果是分页信息，则应该传PageInfo，否则传object
    afterResponse?: (response:IResponse)=>IResponse// 请求返回执行的方法，它在success、error之前执行
    success?: (response:IResponse)=>void;
    error?: (response:IResponse)=>void;
    otherPayload?:any  // 其他的请求体如：method headers
}


/**
 * 请求封装
 * @param payload @type {{
 *                          url: string,  //请求地址
 *                          pageInfo: PageInfo, //分页信息，
 *                          ...  //其他的请求体
 *                        }}
 * @returns {Promise<*>}
 */
async function asyncRequest(payload: any) {
    if (!payload || !payload.url) { throw(new Error('payload require contains url opt')); }
    /**
     * other中可以配置 method headers data 等参数
     */

    const {url, data, ...other} = payload;
    other.data = data;

    // 如果是分页查询 (格式化发送参数)
    if (data instanceof PageInfo) {
        const { pageNum, pageSize, filters, sorts } = data;
        const dataPageInfo = { pageNum, pageSize, filters, sorts };

        if (config.pageHelper.requestFormat) {
            other.data = config.pageHelper.requestFormat(data);
        }

        other.data = dataPageInfo;
    }

    const promise = other.method
        ? request[other.method.toLowerCase()](url, other.data, other)
        : request.send(url, other);

    // 如果是分页查询（格式化反回结果）
    if (data instanceof PageInfo) {
        return promise.then((resp:any) => {
            if (config.pageHelper.responseFormat) {
                const newPageInfo = config.pageHelper.responseFormat(resp.data);
                resp.data = Object.assign(data, newPageInfo);
                return resp;
            }
        })
    } else {
        return promise
    }
}

const defaultPayload = {
    afterResponse: (response:IResponse):IResponse=>response,
    success: function success(response:IResponse):void{console.log('success')},
    error: function error(response:IResponse):void{console.log('error')},
};


/**
 *
 * @param props
 */
export default async function (props: { url: string; payload: object; notice: boolean }):Promise<IResponse>{
    const { url, payload, notice=false } = props;
    const payloadInner = Object.assign({}, defaultPayload, payload);

    const {success, error, afterResponse, ...otherPayload} = payloadInner;

    try {

        let response = await asyncRequest(Object.assign(otherPayload,{url}));
        // !response.status && (await Promise.reject(response));
        if (!response.status) {
            await Promise.reject(response);
        }

        // 自已处理反回的数据，模拟reduce中的操作，这里不要写有副作用的函数
        if (afterResponse) {
            const r = afterResponse(response);
            response = r;
        }

        // 如果需要回调
        success(response);


        // 如果需要通知功能
        if (notice) {
            config.notice.success({
                description: '操作成功',
                message: "成功"
            });
        }

        return response;
    } catch(e) {
        // 如果需要通知功能, 通知会在config中进行配置
        if (notice) {
            config.notice.error({
                description: e.text || e.message,
                message: "出错了"

            });
        }

        // 如果需要内部回调
        error(e);

        return e;
    }
};
