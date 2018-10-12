/**
 * 首页
 * Created by 姚应龙 on 2018/10/11
 */
import {Layout} from "antd";
import * as React from 'react';

const { Content} = Layout;

export default class Home extends React.Component{
    public render(){
        return (
            <Layout className="full-layout crud-page">
                <Content>
                    <div>
                        Welcome ！！
                    </div>
                </Content>
            </Layout>
        )
    }

}