/**
 * 这里配置所有的前端路由
 * Created by yyl on 2017/12/6.
 */

// import RouterModel from "./model";
import { observer } from "mobx-react";
import {RouterStore, syncHistoryWithStore} from 'mobx-react-router';
import * as React from 'react';
import { Router } from 'react-router';
import browserHistory from '../utils/history';
import Routes from './Routes';

const routingStore = new RouterStore();
/*addStore({routing: new RouterModel()});*/

const history = syncHistoryWithStore(browserHistory, routingStore);

@observer
export default class Routers extends React.Component{
    public render(){
        return (
            <Router history={history}>
                <Routes/>
            </Router>
        );
    }
}