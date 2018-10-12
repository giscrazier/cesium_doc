
interface IBaseService {
    // 添加
    add: (payload: object) => Promise<object>;

    // 删除
    del: (payload: object) => Promise<object>;

    // 更新
    update: (payload: object) => Promise<object>;

    // 详情
    detail: (payload: object) => Promise<object>;

    // 列表查询
    list: (payload: object) => Promise<object>;
}

export default IBaseService