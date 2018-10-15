/**
 * Created by 姚应龙 on 2018/10/12
 */
import {action, observable} from "mobx";

export default class {
    @observable public activeKey = "";
    @observable public path:string[] = [];

    @action
    public add(path: string):void{
        if (path.length <= 0) {
            return;
        }
        const oldPath = this.path.find(p=>p===path);
        if (oldPath){
            this.activeKey = oldPath.replace(".html","");
        }else {
            this.path = [...this.path,path];
            this.activeKey = path.replace(".html", "");
        }
    }

    @action
    public remove(targetKey:string ):void{
        if (this.path.length <= 0){
            return;
        }

        if (this.path.length === 1) {
            this.path=[];
            this.activeKey="";
            return;
        }

        const delIndex = this.path.findIndex(p=>p===targetKey+".html");
        // 显示后一页
        let showIndex = delIndex + 1;

        if (showIndex >= this.path.length) { // 后一页没有, 则显示前一页
            showIndex -= 2;
        }


        const path = this.path[showIndex];
        this.path = [...this.path.slice(0,delIndex), ...this.path.slice(delIndex+1)];
        this.activeKey = path.replace(".html", "");
    }

    @action
    public change(targetKey:string):void{
        this.activeKey = targetKey;
    }
}