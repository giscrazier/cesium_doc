import {inject} from 'mobx-react';
import * as React from 'react';
import DocumentTitle from 'react-document-title';
import {Redirect, Route, Switch} from 'react-router-dom';
import config from "../config";
import {addStore} from "../models";

export interface IRoute {
    path: string;
    model?: {
        name: string,
        modelClass: any
    };
    component: React.ComponentClass;
}
//  'ReactElement<Route<RouteProps>>[]' is not assignable to type 'ComponentClass<{}, any>[]'
export interface IRoutesConfig {
    path: string;
    title: string;
    indexRoute: string;
    component: React.ComponentClass,
    childRoutes: Array<React.ReactElement<Route>>
}

/**
 * 生成一组路由
 * @param {*} routesConfig 
 */
export const createRoutes = (routesConfig: IRoutesConfig[]):React.ReactElement<Switch> => {
  return (
    <Switch>
      {
        routesConfig.map((rc) => createSubRoutes(rc))
      }
    </Switch>
  )
};

/**
 * 生成单个路由
 * @param {*} routesConfig 
 */
export const createSubRoutes = (routesConfig:IRoutesConfig) => {
    const {component: Comp, path, indexRoute, title, ...otherProps} = routesConfig;
    const routeProps = Object.assign({
        key: path || `k_${Math.ceil(Math.random()*10000)}`,// $$.randomStr(4),
        render: (props: any) => (
            <DocumentTitle title={title}>
                <Comp routerData={otherProps} {...props} />
            </DocumentTitle>
        )
    }, path && {
        path
    });

    if (indexRoute) {
        return [
            <Redirect key={path + "_redirect"} exact={true} from={path} to={indexRoute} />,
            <Route key={path || `k_${Math.ceil(Math.random()*10000)}`} {...routeProps} />
        ]
    }

    return <Route {...routeProps} />
};

/**
 * 生成单个路由并与model绑定
 * @param path
 * @param model
 * @param component
 * @returns {*}
 */
export const createRoute = ({path, model, component}:IRoute):React.ReactElement<Route>=>{
    path = config.PROJECT_NAME + path;
    if (model) {
        addStore({
            [model.name]: new model.modelClass()
        });
        return <Route key={`k_${Math.ceil(Math.random()*10000)}`} exact={true} path={path} component = {inject(model.name)(component)}/>
    }

    return <Route key={`k_${Math.ceil(Math.random()*10000)}`} exact={true} path={path} component = {component}/>
};
