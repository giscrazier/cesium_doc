/**
 * Created by 姚应龙 on 2018/10/12
 */
import { Tabs } from 'antd';
// import {TabPaneProps} from "antd/lib/tabs";
import {inject, observer} from "mobx-react";
import * as React from 'react';
 import APP_CONSTANT from "../../../utils/APP_CONSTANT";
import IProps from "../../IProps";
import TabsModel from '../models';

const TabPane = Tabs.TabPane;

export interface ITabs extends IProps{
    tabs:TabsModel
}

const defaultKey = "Home";


@inject("tabs")
@observer
class TabsPage extends React.Component<ITabs> {

    /*public static getDerivedStateFromProps(nextProps:ITabs, prevState:IState) {
        console.log(nextProps);
        if (!nextProps.tabs.path) {
            return null;
        }
        const panes = prevState.panes;
        const oldKey = panes.find(p=>p.key === nextProps.tabs.path);
        if (oldKey) {
            return null;
        }else {
            panes.push({
                tab: nextProps.tabs.title,
                key: nextProps.tabs.path,
                path: nextProps.tabs.path
            });
            return {
                activeKey: nextProps.tabs.path,
                panes
            }
        }
    }*/


    public render(){
        const { activeKey, path} = this.props.tabs;

        return(
            <Tabs
                onChange={this.onChange}
                activeKey={path.length>=0?activeKey:defaultKey}
                type="editable-card"
                onEdit={this.onEdit}
                hideAdd={true}
            >
                <TabPane tab={"Home"} key={"Home"} closable={false}>
                    coming soon……
                </TabPane>
                {
                    path.map(
                    p => <TabPane tab={p.replace(".html","")} key={p.replace(".html","")} closable={true}>
                        <iframe src={(p.startsWith("http://") || p.startsWith("https://"))?p:APP_CONSTANT.PROJECT_NAME+'/pages/'+p} style={{width: '100%', height: 'calc(100vh - 130px)', borderWidth: 0}}/>
                    </TabPane>)
                }
            </Tabs>
        );
    }

    public remove = (targetKey:string) => {
        this.props.tabs.remove(targetKey);
        this.redirect();
    };

    private onChange = (activeKey:string) => {
        // this.setState({ activeKey });
        this.props.tabs.change(activeKey);
        // console.log('his', this.props.history)
        this.redirect();
    };

    private onEdit = (targetKey: string | React.MouseEvent<HTMLElement>, action: any): void => {
        this[action](targetKey);
    };
    private redirect(){
        const {history,location} = this.props;
        // @ts-ignore
        const search = location.search.replace("?","").split("=");
        if (search.length >= 2) {
            const path = location.pathname+"?path=" + this.props.tabs.activeKey +".html";
            history.push(path);
        }else {
            history.push(location.pathname as string);
        }
    }
}

export default TabsPage;