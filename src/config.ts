import {notification} from 'antd';
import IResponse from "./l-utils/request/IResponse";
import history from './utils/history';
import PageInfo from "./utils/pageHelper/PageInfo";

const PROJECT_NAME = process.env.REACT_APP_PROJECT_NAME || "";
const notice = notification;
/**
 * 应用配置 如请求格式，反回格式，异常处理方式，分页格式等
 */
const config = {

    notice,

    // 异步请求配置
    request: {
        prefix: 'http://218.85.80.181:12302',
        /**
         * 因为modelEnhance需要知道服务器反回的数据，
         * 什么样的是成功，什么样的是失败，如
         * {status: true, data: ...} // 代表成功
         * {status: false, message: ...} // 代表失败
         * 下面写法代表只要有反回就认为是成功，
         * 实际中应该通过服务端反回的response中的
         * 成功失败标识来进行区分
         */
        afterResponse: (response:IResponse) => {
            const { status, message } = response;
            if (status) {
                return response;
            } else {
                // 和session相关的状态码，以6开头， session相关的错误，不提示，直接跳转到登录页面
                if (Math.floor(response.code/100) === 6) {
                    history.push(PROJECT_NAME+'/sign/login');
                }else if (response.code === 400) {
                    // history.push(PROJECT_NAME+'/sign/login');
                    notice.error({
                        message: '错误',
                        description:message
                    });
                }else {
                    notice.error({
                        message: '错误',
                        description:message
                    });
                }
                return response;
            }
        },
        errorHandle: (err: any) => {
            // 请求错误全局拦截
            if (err.name === 'RequestError') {
                // notice.error(err.text || err.message);
            }
        }
    },

    // 全局异常
    exception: {
        global: (err:any) => {
            const errName = err.name;
            // RequestError为拦截请求异常
            if (errName === 'RequestError') {
                console.error(err);
            } else {
                console.error(err);
            }
            notice.error(err.message);
        }
    },

    // 分页助手
    pageHelper: {
        // 格式化要发送到后端的数据
        requestFormat: (pageInfo:PageInfo) => {
            const { pageNum, pageSize, filters, sorts } = pageInfo;
            return {
                page: pageNum,
                size: pageSize,
                sortMap: sorts,
                queryCondition: filters
            };
        },

        // 格式化从后端反回的数据
        responseFormat: (respData:any) => {
            const {
                pageNum,
                pageSize,
                total,
                list,
                pages
            } = respData;
            return {
                pageNum,
                pageSize,
                total,
                totalPages: pages,
                list
            };
        }
    },

    // 路由加载效果
    /*router: {
        loading: <PageLoading loading />
    },*/

    /**
     * 模拟数据时包装反回数据
     * 因为，后端反回数据时一般都会在外边包装一层状态信息
     * 如成功时：
     * {
     *   status: true,
     *   data: responseData
     * }
     * 或出错时：
     * {
     *   status: false,
     *   code: 500,
     *   message: '用户名或密码错误'
     * }
     * 这里就是配置这两个函数，为了我们模拟数据时可以少写几行代码的 orz...
     */
    mock: {
        toSuccess: (response:any) => ({
            status: true,
            data: response
        }),

        toError: (message:string) => ({
            status: false,
            message
        })
    },
    // 前端部署位置
    PROJECT_NAME
};
export default config;