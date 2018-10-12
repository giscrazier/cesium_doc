/**
 * Created by 姚应龙 on 2018/9/15
 * 创建基于D3 的数据更新机制
 */
const enter = Symbol();
const update = Symbol();
const exit = Symbol();


const emptyFn:(items:any[])=>void = (items:any[])=>items;

class Data {
    private idSet: Set<any>;
    /**
     *
     * @param list 数据数组
     * @param idFn 数据键
     * @param imt 原始数据对象
     */
    constructor(private list:any[], private idFn = (d:any)=>d, private imt:Immutable){
        // this.idSet=new Set();
        this.idSet = new Set(this.list.map(this.idFn));
    }

    // 更新
    public update(items:any[]){
        items.forEach(i=>{
            const idx = this.list.findIndex(l=>this.idFn(i) === this.idFn(l));
            if (idx !== -1) {
                this.list[idx] = Object.assign({}, this.list[idx], items);
            }
        });

        this.compare();
    }

    // 新增
    public add(items:any[]){
        items = items.map(d=>this.idFn(d) !== undefined);
        items = items.filter(item => !this.idSet.has(this.idFn(item)));

        this.list.push(...items);

        this.compare();
    }

    // 删除
    public del(items:any[]){
        // let delIdxs = items.map(this.idFn);
        // this.list = this.list.filter(l=>!delIdxs.includes(this.idFn(l)));

        this.compare();
    }

    public fill(items:any[]){
        this.list = items;
        this.compare();
    }

    // 比较数据，执行增删改查
    private compare(){
        const enterArr:any[] = [];
        const updateArr:any[] = [];
        const exitArr:any[] = [];

        // 在Data中也在imt中的数据
        const dInImt:any[] = [];
        this.list.forEach(l=>{
            const t = this.imt.list.find(i=>this.idFn(i) === this.idFn(l));
            if (t) {// 在原始数据中找到了
                if (l !== t) {
                    updateArr.push(l);
                    Object.assign(t, l);
                }
                dInImt.push(t);

            }else {// 在原始数组中没找到，则新增
                enterArr.push(l);
            }
        });

        // 寻找在原始数组中的数据，却没有在新数组中的数据，即需要exit的数据
        /*if (dInImt.length !== this.imt.list.length) {
            if (this.idx) {
                let dInImtInner = dInImt.map(d=>d[this.idx]);
                exitArr = this.imt.list.filter(i=>!dInImtInner.includes(i[this.idx]));
            }else {
                exitArr = this.imt.list.filter(i=>!dInImt.includes(i));
            }

        }*/

        // 执行增删改查
        this.imt[enter](enterArr);
        this.imt[update](updateArr);
        this.imt[exit](exitArr);

        this.imt.list = this.list;

    }
}

export default class Immutable {
    public list:any[];
    constructor(array: any[]){
        this.list = array;

        this[enter] = emptyFn;
        this[update] = emptyFn;
        this[exit] = emptyFn;
    }

    /**
     * 注册当第一次进入数据池时执行的函数
     * @param fn
     */
    public enter(fn:(items:any[])=>void = emptyFn){
        this[enter] = fn;
        return this;
    }

    /**
     * 注册数据池中的数据发生变化时执行的函数
     * @param fn
     */
    public update(fn:(items:any[])=>void = emptyFn){
        this[update] = fn;
        return this;
    }

    /**
     * 注册数据池中删除数据时执行的函数
     * @param fn
     */
    public exit(fn:(items:any[])=>void = emptyFn){
        this[exit] = fn;
        return this;
    }

    /**
     *
     * @param idFn 返回数据唯一key的函数，如：d=>d.id
     */
    public data(idFn:(item:any)=>any){
        return new Data(this.list, idFn, this);
    }
}