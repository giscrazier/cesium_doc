import {action, observable, runInAction} from 'mobx';
import 'whatwg-fetch';
import IResponse from "../l-utils/request/IResponse";
import {IPayload} from "../utils/modelEnhance";

export interface IMenu {
    name: string;
    icon?: string;
    path: string,
    children?: IMenu[],
    parentPath?: string[],
    hideInMenu?: boolean
    target?:'_blank' | '_parent' | '_self' | '_top' | 'framename'
}


export default class Global {

    @observable public menu:IMenu[] = [];
    @observable public flatMenu:IMenu[] = [];

    @action
    public async getMenu(payload:any){
        const { status, data } = await getMenu(payload);

        if (status) {
            const menu = data;

            const loopMenu = (menu2:IMenu[], pitem?:IMenu) => {
                menu2.forEach((item:IMenu) => {
                    if (pitem && pitem.path) {
                        item.parentPath = pitem.parentPath ? pitem.parentPath.concat(pitem.path) : [pitem.path];
                    }
                    if (item.children && item.children.length) {
                        loopMenu(item.children, item);
                    }
                });
            };
            loopMenu(menu);

            runInAction(()=>{
                this.menu = menu;
                this.flatMenu = getFlatMenu(menu);
            })


        }
    }
};


export function getFlatMenu(menus:IMenu[]) {
  let menu:IMenu[] = [];
  menus.forEach(item => {
    if (item.children) {
      menu = menu.concat(getFlatMenu(item.children));
    }
    menu.push(item);
  });
  return menu;
}

export async function getMenu(payload:IPayload):Promise<IResponse> {
    return {
        status: true,
        message: '',
        code:200,
        data:[

            {
                name: '首页',
                icon: 'dashboard',
                path: '/home'
            },
            {
                name: '管线修复改造',
                icon: 'desktop',
                path: '/pipe',
                children: [
                    {
                        name: '计划统计',
                        icon:'share-alt',
                        path:'/statisticalQuery'
                    },
                    {
                        name: '计划制定',
                        icon:'book',
                        path:'/drawUpPlan'
                    },
                    {
                        name:'计划一览',
                        icon:"bulb",
                        path:"/planGlance"
                    },
                ],
            },
            {
                name: '排水户排查建档',
                icon: 'dashboard',
                path: '/drainInvest'
            },
            {
                name: '源头纳污',
                icon: 'dashboard',
                path: '/ytnw',
                children: [
                    {
                        name: '计划制定',
                        icon:'book',
                        path:'/ytnw/drawUpPlan'
                    },
                    {
                        name: '计划一览',
                        icon:'book',
                        path:'/ytnw/planGlance'
                    },
                ],
            },
            {
                name: '水质监测',
                icon: 'dashboard',
                path: '/wqm/map',
            },
            {
                name: '管网排查',
                icon: 'dashboard',
                path: '/pipeCheck',
            },
            {
                name: '系统管理',
                icon: 'dashboard',
                path: '/systemManager',
                children: [
                    {
                        name: '个人信息',
                        icon: 'bulb',
                        path: '/userInfo'
                    },
                    {
                        name: '用户管理',
                        icon: 'bulb',
                        path: '/listUser'
                    },
                    {
                        name: '角色管理',
                        icon: 'bulb',
                        path: '/listRole'
                    },
                    /*{
                        name: '用户授权',
                        icon: 'bulb',
                        path: '/systemManager1'
                    },
                    {
                        name: '角色授权',
                        icon: 'bulb',
                        path: '/systemManager2'
                    },*/
                    {
                        name: '密码修改',
                        icon: 'bulb',
                        path: '/userPasswd'
                    },
                ],
            }
        ]
    };
}
