import { Layout } from 'antd';
import * as React from 'react';
import { Switch } from 'react-router-dom';
import ILayout from "./ILayout";
import './styles/user.less';
const { Content } = Layout;

export default class UserLayout extends React.Component<ILayout> {
  public render() {
    const {routerData} = this.props;
    const {childRoutes} = routerData;

    return (
      <Layout className="full-layout user-layout fixed">
        <Content>
          <Switch>{childRoutes}</Switch> 
        </Content>
      </Layout>
    );
  }
}