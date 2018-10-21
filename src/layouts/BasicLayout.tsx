import {Layout} from 'antd';
import cx from 'classnames';
import {inject, observer} from 'mobx-react';
import * as React from 'react';
import {Switch} from 'react-router-dom';
import NavBar from '../components/NavBar';
import {LeftSideBar} from '../components/SideBar';
import $$ from '../l-utils';
import {IMenu} from "../models/global";
import TabsModel from "../views/tabs/models";
import ILayout from "./ILayout";
// import ElementQueries from 'css-element-queries/src/ElementQueries';
import './styles/basic.less';

// import PageLoading from '../components/Loading/PageLoading';

interface IBasicLayout extends ILayout{
    tabs?: TabsModel
}


const {Content, Header} = Layout;
const {store} = $$;
// const pathToRegexp = require('path-to-regexp');

/**
 * 基本部局
 * 可设置多种皮肤 theme: [light, grey, primary, info, warning, danger, alert, system, success, dark]
 * 可设置多种布局 [header(固定头), sidebar(固定边栏), breadcrumb(固定面包蟹)]
 * @author weiq
 */

@inject("tabs")
@inject('global')
@observer
export default class BasicLayout extends React.Component<IBasicLayout> {
    public state: {
        collapsedLeftSide: boolean; // 左边栏开关控制
        leftCollapsedWidth: number; // 左边栏宽度
        expandTopBar: boolean; // 头部多功能区开合
        showSidebarHeader: boolean; // 左边栏头部开关
        collapsedRightSide: boolean; // 右边栏开关
        theme: any; // 皮肤设置
        user: any;
        currentMenu: any;
        isCheckingSession: boolean;
    };

    constructor(props: IBasicLayout) {
        super(props);

        const user = store('user') || [];
        const theme = store('theme') || {
            leftSide: 'darkgrey', // 左边
            navbar: 'light' // 顶部
        };


        if (!theme.layout) {
            theme.layout = [
                'fixedHeader',
                'fixedSidebar',
                'fixedBreadcrumbs'
                // 'hidedBreadcrumbs',
            ];
        }
        this.state = {
            collapsedLeftSide: false, // 左边栏开关控制
            leftCollapsedWidth: 60, // 左边栏宽度
            expandTopBar: false, // 头部多功能区开合
            showSidebarHeader: false, // 左边栏头部开关
            collapsedRightSide: true, // 右边栏开关
            theme, // 皮肤设置
            user,
            currentMenu: {},
            isCheckingSession: false
        };
    }

    public componentDidMount() {
        // ElementQueries.init();
        this.props.global.getMenu();
    }

    public componentWillMount() {
        // 检查有户是否登录
        /*let user = store('user');
        if (!user) {
            this.props.history.forward(config.PROJECT_NAME+'/sign/login')
        }else {
            this.setState({
                isCheckingSession: true
            });
            $$.post('/user/checkSession',{data: {sessionId: store.get('token')}})
                .then((d:IResponse)=>{
                    if (!d.status) {
                        this.props.history.forward(config.PROJECT_NAME+'/sign/login')
                    }else {
                        this.setState({
                            isCheckingSession: false
                        });
                    }
                });
        }*/
    }

    public componentWillReceiveProps(nextProps: ILayout) {
        if (
            nextProps.location.pathname !== this.props.location.pathname ||
            nextProps.global.flatMenu !== this.props.global.flatMenu
        ) {
            this.setState({
                currentMenu: this.getCurrentMenu(nextProps) || {}
            });
        }
    }

    public getCurrentMenu(props?: ILayout) {

        const {
            location,
            global
        } =
        props || this.props;

        const search = location.search.replace("?","").split("=");
        const path = search.length>=2?  search[1]: search[0];
        const menu = this.getMeunMatchKeys(global.flatMenu, path)[0];
        return menu;
    }

    public getMeunMatchKeys = (flatMenu: IMenu[], path: string) => {
        return flatMenu.filter(item => {
            return item.path === path;
            // return pathToRegexp(item.path).test(path);
        });
    };

    /**
     * 顶部左侧菜单图标收缩控制
     */
    public onCollapseLeftSide = () => {
        const collapsedLeftSide =
            this.state.leftCollapsedWidth === 0
                ? true
                : !this.state.collapsedLeftSide;
        const collapsedRightSide =
            this.state.collapsedRightSide || !collapsedLeftSide;

        this.setState({
            collapsedLeftSide,
            collapsedRightSide,
            leftCollapsedWidth: 60
        });
    };

    /**
     * 完全关闭左边栏，即宽为0
     */
    public onCollapseLeftSideAll = () => {
        this.setState({
            collapsedLeftSide: true,
            leftCollapsedWidth: 0
        });
    };

    /**
     * 展开面包屑所在条中的多功能区
     */
    public onExpandTopBar = () => {
        this.setState({
            expandTopBar: true
        });
    };

    /**
     * 与上面相反
     */
    public onCollapseTopBar = () => {
        this.setState({
            expandTopBar: false
        });
    };

    /**
     * 切换左边栏中头部的开合
     */
    public toggleSidebarHeader = () => {
        this.setState({
            showSidebarHeader: !this.state.showSidebarHeader
        });
    };

    /**
     * 切换右边栏
     */
    public toggleRightSide = () => {
        this.setState({
            collapsedLeftSide: this.state.collapsedRightSide,
            collapsedRightSide: !this.state.collapsedRightSide
        });
    };

    public onChangeTheme = (theme: any) => {
        // $$.setStore('theme', theme);
        store('theme', theme);
        this.setState({
            theme
        });
    };

    public render() {
        const {
            collapsedLeftSide,
            leftCollapsedWidth,
            // expandTopBar,
            showSidebarHeader,
            // collapsedRightSide,
            theme,
            user,
            // currentMenu
        } = this.state;

        const {routerData, location, global} = this.props;
        let {menu, flatMenu} = global;

        const {childRoutes} = routerData;

        const classnames = cx('basic-layout', 'full-layout', {
            fixed: theme.layout && theme.layout.indexOf('fixedSidebar') !== -1,
            'fixed-header':
                theme.layout && theme.layout.indexOf('fixedHeader') !== -1,
            'fixed-breadcrumbs':
                theme.layout && theme.layout.indexOf('fixedBreadcrumbs') !== -1,
            'hided-breadcrumbs':
                theme.layout && theme.layout.indexOf('hidedBreadcrumbs') !== -1
        });

        if (this.props.global.searchStr.length > 0) {
            // flatMenu.forEach((f:IMenu)=>console.log(f.path));
            // menu = flatMenu.filter((f:IMenu)=>(f.children && f.path.startsWith(this.props.global.searchStr)));
            const menus2: any[] = [];
            const reg = new RegExp("^"+this.props.global.searchStr, 'i');
            menu.forEach((m:IMenu)=>{
                // @ts-ignore
                const cs = m.children.filter(c=>reg.test(c.path));
                menus2.push(...cs);
            });
            menu = menus2;
        }

        return (
            // this.state.isCheckingSession? <PageLoading loading={true}/> :
            <Layout className={classnames}>
                <Header>
                    <NavBar
                        collapsed={collapsedLeftSide}
                        onCollapseLeftSide={this.onCollapseLeftSide}
                        onExpandTopBar={this.onExpandTopBar}
                        toggleSidebarHeader={this.toggleSidebarHeader}
                        theme={theme.navbar}
                        user={user}
                    />
                </Header>
                <Layout>
                    <LeftSideBar
                        collapsed={collapsedLeftSide}
                        leftCollapsedWidth={leftCollapsedWidth}
                        showHeader={showSidebarHeader}
                        onCollapse={this.onCollapseLeftSide}
                        onCollapseAll={this.onCollapseLeftSideAll}
                        location={location}
                        theme={theme.leftSide}
                        flatMenu={flatMenu}
                        currentMenu={this.getCurrentMenu() || {}}
                        menu={menu}
                        user={user}
                        tabs={this.props.tabs as TabsModel}
                    />
                    <Content>
                        <Layout className="full-layout">
                            <Content className="router-page">
                                <Switch>{childRoutes}</Switch>
                            </Content>
                        </Layout>
                    </Content>

                </Layout>

            </Layout>
        );
    }
}
