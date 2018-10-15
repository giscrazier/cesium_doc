import * as React from 'react';
import config from '../config';

import {Switch} from 'react-router-dom';
import BasicLayout from '../layouts/BasicLayout';
import UserLayout from '../layouts/UserLayout';
import {createRoutes} from "../utils/core";
// import Home from "../views/home/index";

import Guide from "../views/guide";
import Doc from '../views/tabs/index';


const routesConfig = [
    {
        // 这里的path匹配路径的第一节
        path: config.PROJECT_NAME+'/sign',
        title: '登录',
        indexRoute: config.PROJECT_NAME+'/sign/login',
        component: UserLayout,
        childRoutes: [
            // Home
            Doc
        ]
    },
    {
        path: '/',
        title: '3D GIS',
        component: BasicLayout,
        indexRoute: config.PROJECT_NAME+'/api',
        childRoutes: [
            // Home
            Doc,
            Guide
        ]
    }
];


export default class Routes extends React.Component{
    public render(){
        return (
            <React.Fragment>
                <Switch>
                    {
                        createRoutes(routesConfig)
                    }
                </Switch>
            }
            </React.Fragment>
        );
    }
}

