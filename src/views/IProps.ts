/**
 * React 组件属性基类
 * Created by 姚应龙 on 2018/10/11
 */
import {History, LocationDescriptorObject} from "history";
import {match} from "react-router";

export default interface IProps {
    global: any;
    history: History;
    location: LocationDescriptorObject;
    match: match;
    staticContext:any
}