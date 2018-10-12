import * as React from "react";
import IProps from "../views/IProps";

/**
 * Created by 姚应龙 on 2018/10/11
 */
export default interface ILayout extends IProps {
    routerData:{
        childRoutes: React.ClassicComponentClass[]
    };
    location:any;
}