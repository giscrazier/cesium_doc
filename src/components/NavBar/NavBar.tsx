import { Avatar, Badge, Popover } from 'antd';
import cx from 'classnames';
import * as React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/logo.png';
// import config from '../../config';
import Icon from "../Icon";
import SearchBox from './SearchBox';
import './style/css.css';
import './style/index.less';

interface INavBar {
    fixed: boolean;
    theme: string;
    onCollapseLeftSide: (event:React.SyntheticEvent)=>void;
    collapsed: boolean;
    onExpandTopBar: (event:React.SyntheticEvent)=>void;
    toggleSidebarHeader: (event:React.SyntheticEvent)=>void;
    user: {
        userName: string;
    }
}

// const doc = document as HTMLDocument;

/**
 * 其本本局头部区域
 */
class NavBar extends React.Component<INavBar> {
    public static defaultProps = {
        fixed: true,
        theme: '', // 'bg-dark',
    };

  public state = {
    openSearchBox: false,
  };

/*  toggleFullScreen() {
    if (!document.fullscreenElement &&
        !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  }*/

  public onCloseSearchBox = () => {
    this.setState({
      openSearchBox: false,
    });
  };

    public onOpenSearchBox = () => {
    this.setState({
      openSearchBox: true,
    })
  };

    public render() {
    const { openSearchBox } = this.state;
    const { fixed, theme, onCollapseLeftSide, collapsed,
      onExpandTopBar, toggleSidebarHeader, user } = this.props;

    const classnames = cx(
      'navbar',
      {
        'navbar-fixed-top': !!fixed,
        'navbar-sm': collapsed,
        ['bg-' + theme]: !!theme,
      }
    );

    return (
      <header className={classnames}>
        <div className="navbar-branding">
          <Link className="navbar-brand" to="/">
              <img src={logoImg} alt="logo" /><b>福州市城区管网改扩建(修复)工程项目管理系统</b>
          </Link>
          <span className="toggle_sidemenu_l" onClick={onCollapseLeftSide}>
            <Icon type="lines" />
          </span>
        </div>
        <ul className="nav navbar-nav navbar-left clearfix">
          {collapsed ? null : (
            <li>
              <a className="sidebar-menu-toggle" onClick={toggleSidebarHeader}>
                <Icon type="ruby" />
              </a>
            </li>
          )}
          <li>
            <a onClick={onExpandTopBar}>
              <Icon type="wand" />
            </a>
          </li>
          {/*<li onClick={this.toggleFullScreen}>
            <a className="request-fullscreen">
              <Icon type="screen-full" />
            </a>
          </li>*/}
          <li className="mini-search" onClick={this.onOpenSearchBox}>
            <a>
              *<Icon type="search" antd={true} />
            </a>
          </li>
        </ul>
        <form className="navbar-form navbar-search clearfix">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="全文检索" onClick={this.onOpenSearchBox} />
          </div>
        </form>
        <ul className="nav navbar-nav navbar-right clearfix">
          <li>
            <a href="https://github.com/-UI/dva-boot-admin">
              <Icon type="github" antd = {true} />
            </a>
          </li>
          <li className="dropdown">
            <Popover placement="bottomRight" title={'通知'}
              overlayClassName={cx("navbar-popup", {[theme]: !!theme})} content={''} trigger="click">
              <a className="dropdown-toggle">
                <Icon type="radio-tower" />
              </a>
            </Popover>
          </li>
          <li className="dropdown">
            <Popover placement="bottomRight" title={`WELCOME ${user.userName}`} 
              overlayClassName={cx("navbar-popup", {[theme]: !!theme})} content={<UserDropDown />} trigger="click">
              <a className="dropdown-toggle">
                <Badge dot={true}><Avatar src={require('../../assets/images/avatar.jpg')}>{user.userName}</Avatar></Badge>
              </a>
            </Popover>
          </li>
        </ul>
        <SearchBox visible={openSearchBox} onClose={this.onCloseSearchBox} />
      </header>
    );
  }
}

const UserDropDown = () => (
  <ul className="dropdown-menu list-group dropdown-persist">
    <li className="list-group-item">
      <a className="animated animated-short fadeInUp">
        <Icon type="mail" /> 信息
        <span className="label label-warning">2</span>
      </a>
    </li>
    <li className="list-group-item">
      <a className="animated animated-short fadeInUp">
        <Icon type="users" /> 好友
        <span className="label label-warning">6</span>
      </a>
    </li>
    <li className="list-group-item">
      <a className="animated animated-short fadeInUp">
        <Icon type="gear" /> 帐户设置 
      </a>
    </li>
    <li className="list-group-item">
      <a className="animated animated-short fadeInUp">
        <Icon type="ring" /> 通知 
      </a>
    </li>
    {/*<li className="list-group-item dropdown-footer">
      <Link to={config.PROJECT_NAME+"/sign/login"}>
        <Icon type="poweroff" /> 退出 
      </Link>
    </li>*/}
  </ul>
);

export default NavBar;