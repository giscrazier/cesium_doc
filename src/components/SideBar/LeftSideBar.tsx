/**
 * 来源
 * https://github.com/ant-design/ant-design-pro/blob/master/src/components/SiderMenu/SiderMenu.js
 */
import {Layout, Menu, Select, Switch} from 'antd';
import cx from 'classnames';
// import {inject, observer} from "mobx-react";
import * as React from 'react';
import {Link} from "react-router-dom";
// import { Link } from 'react-router-dom';
import {IMenu} from "../../models/global";
import TabsModel from "../../views/tabs/models";
import Icon from '../Icon';
import './style/index.less';

function hasTabs(tabs: TabsModel | undefined): tabs is TabsModel {
    return (tabs as TabsModel).activeKey !== undefined;
}

const Option = Select.Option;
const {Sider} = Layout;
const SubMenu = Menu.SubMenu;
const pathToRegexp = require('path-to-regexp');

interface ILeftSideBar {
    fixed: boolean;
    theme: 'light' | 'dark';
    currentMenu: IMenu;
    collapsed: boolean;
    onCollapse: () => void;
    onCollapseAll: () => void;
    leftCollapsedWidth: number;
    showHeader: boolean;
    menu: IMenu[];
    flatMenu: IMenu[];
    user: {
        userName: string
    };
    location: any,
    tabs: TabsModel
}

// Allow menu.js config icon as string or ReactNode
//   icon: 'setting',
//   icon: 'http://demo.com/icon.png',
//   icon: <Icon type="setting" />,
const getIcon = (icon: any) => {
    if (typeof icon === 'string' && icon.indexOf('http') === 0) {
        return <img src={icon} alt="icon" className={`sider-menu-item-img`}/>;
    }
    if (typeof icon === 'string') {
        return <Icon type={icon} font={'city'} style={{fontSize: 18, marginRight: 10}}/>;
    }
    return icon;
};

export const getMeunMatchKeys = (flatMenu: IMenu[], path: string) => {
    return flatMenu.filter((item: IMenu) => {
        return pathToRegexp(item.path).test(path);
    });
};

class LeftSideBar extends React.Component<ILeftSideBar> {
    public static defaultProps = {
        fixed: true,
        theme: ''
    };

    public state: {
        openKeys: string[] | undefined,
        selectedKey: string
    };


    constructor(props: ILeftSideBar) {
        super(props);
        this.state = {
            openKeys: props.currentMenu ? props.currentMenu.parentPath : [],
            selectedKey:""
        };
    }

    public componentWillReceiveProps(nextProps: ILeftSideBar) {
        if ('currentMenu' in nextProps) {
            this.setState({
                openKeys: nextProps.currentMenu.parentPath || [],
                selectedKey: nextProps.currentMenu.path
            });
            if (hasTabs(nextProps.tabs)) {
                nextProps.tabs.add(nextProps.currentMenu.path || "");
            }
        }
    }

    public pathClick = (e: React.SyntheticEvent) => {
        const target = e.currentTarget;
        const path = target.getAttribute("data-path") || "";

        if (hasTabs(this.props.tabs)) {
            this.props.tabs.add(path);
            this.setState({
                selectedKey:path
            })
        }
    };

    /**
     * 判断是否是http链接.返回 Link 或 a
     * Judge whether it is http link.return a or Link
     * @memberof SiderMenu
     */
    public getMenuItemPath = (item: IMenu) => {
        const itemPath = this.conversionPath(item.path);
        const icon = getIcon(item.icon);
        const {name} = item;
        // Is it a http link
        if (/^https?:\/\//.test(itemPath)) {
            return (
                <a href={"javascript:void(0);"} data-path={item.path} onClick={this.pathClick}>
                    {icon}
                    <span>{name}</span>
                </a>
            );
        }
        return (
            <Link to={"/api?path="+item.path} data-path={item.path} onClick={this.pathClick}>
                {icon}
                <span>{name}</span>
            </Link>

        );
    };

    /**
     * get SubMenu or Item
     */
    public getSubMenuOrItem = (item: IMenu) => {
        if (item.children && item.children.some(child => !!child.name)) {
            const childrenItems = this.getNavMenuItems(item.children);
            if (childrenItems && childrenItems.length > 0) {
                return (
                    <SubMenu
                        title={
                            item.icon ? (
                                <span>
                  {getIcon(item.icon)}
                                    <span>{item.name}</span>
                </span>
                            ) : (
                                item.name
                            )
                        }
                        key={item.path}
                    >
                        {childrenItems}
                    </SubMenu>
                );
            }
            return null;
        } else {
            return (
                <Menu.Item key={item.path}>{this.getMenuItemPath(item)}</Menu.Item>
            );
        }
    };
    /**
     * 获得菜单子节点
     */
    public getNavMenuItems = (menusData: IMenu[]) => {
        if (!menusData) {
            return [];
        }
        return menusData
            .filter(item => item.name && !item.hideInMenu)
            .map(item => {
                const ItemDom = this.getSubMenuOrItem(item);
                return ItemDom;
            })
            .filter(item => item);
    };

    // conversion Path
    // 转化路径
    public conversionPath = (path: string) => {
        if (path && path.indexOf('http') === 0) {
            return path;
        } else {
            return `/${path || ''}`.replace(/\/+/g, '/');
        }
    };

    // Get the currently selected menu
    public getSelectedMenuKeys = () => {
        /*const pathname = this.props.location.pathname;
        const selectMenu = getMeunMatchKeys(this.props.flatMenu, pathname)[0];
        return selectMenu ? [selectMenu.path] : [];*/

        /*location:
            hash: ""
        pathname: "/api"
        search: "?path=abc"
        state: undefined*/

        const search = this.props.location.search.replace("?","").split("=");
        return search.length>=2?  [search[1]]: [search[0]];

        // return [this.state.selectedKey];
    };

    public isMainMenu = (key: string): boolean => {
        return this.props.menu.some(
            item => (!!key && item.path === key)
        );
    };

    public handleOpenChange = (openKeys: string[]) => {
        const lastOpenKey = openKeys[openKeys.length - 1];
        const moreThanOne =
            openKeys.filter(openKey => this.isMainMenu(openKey)).length > 1;
        this.setState({
            openKeys: moreThanOne ? [lastOpenKey] : [...openKeys]
        });
    };

    public render() {
        const {
            fixed,
            theme,
            collapsed,
            onCollapse,
            onCollapseAll,
            leftCollapsedWidth,
            showHeader,
            menu,
            user
        } = this.props;

        const toggle = (collapsed && leftCollapsedWidth !== 0) ?
            <Switch
                checked={collapsed}
                onChange={onCollapseAll}
                size="small"
            /> : null;

        const classnames = cx('sidebar-left', 'sidebar-default', {
            affix: !!fixed,
            'sidebar-left-sm': collapsed,
            'show-header': collapsed ? false : showHeader,
            'sidebar-left-close': leftCollapsedWidth === 0,
            [theme]: !!theme
        });

        const {openKeys,selectedKey} = this.state;
        // const openKeys = this.props.currentMenu.parentPath?this.props.currentMenu.parentPath:this.state.openKeys;
        // if pathname can't match, use the nearest parent's key
        // const selectedKeys = this.getSelectedMenuKeys();
        // Don't show popup menu when it is been collapsed
        const menuProps = collapsed
            ? {
                selectedKeys:[selectedKey]
            }
            : {
                openKeys,
                selectedKeys:[selectedKey]
            };

        // @ts-ignore
        return (
            <Sider
                className={classnames}
                width={400}
                collapsedWidth={leftCollapsedWidth + 0.1}
                collapsible={true}
                collapsed={collapsed}
                onCollapse={onCollapse}
                breakpoint="lg"
                trigger={null}
            >
                <div className="sidebar-left-content">
                    <header className="sidebar-header">
                        <div className="userlogged clearfix">
                            <Icon type="woman"/>
                            <div className="user-details">
                                <span>{user.userName}</span>
                                <div className="dropdown">
                                    <Select
                                        size="small"
                                        defaultValue="online"
                                        dropdownClassName="sidebar-header-dropdown"
                                    >
                                        <Option value="online">
                                            <span className="user online"/>在线
                                        </Option>
                                        <Option value="busy">
                                            <span className="user busy"/>忙碌
                                        </Option>
                                        <Option value="invisible">
                                            <span className="user invisible"/>隐身
                                        </Option>
                                        <Option value="offline">
                                            <span className="user offline"/>离线
                                        </Option>
                                    </Select>
                                </div>
                            </div>
                        </div>
                    </header>
                    <Menu
                        // onClick={this.handleClick}
                        inlineCollapsed={collapsed}
                        onOpenChange={this.handleOpenChange}
                        mode="inline"
                        theme={theme}
                        {...menuProps}
                    >
                        {this.getNavMenuItems(menu)}
                    </Menu>
                    <div className="sidebar-toggle-mini">
                        {
                            toggle
                        }
                    </div>
                </div>
            </Sider>
        );
    }
}

export default LeftSideBar;
