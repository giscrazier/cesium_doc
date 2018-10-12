// 所有的store注册进来
import Global from "./global";

const stores = {};

// 添加store
export const addStore = (store: any)=>{
    Object.assign(stores, store);
};
export default stores;

// 注册全局model
 addStore({'global': new Global()});
