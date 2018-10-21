import {action, observable, runInAction} from 'mobx';
import 'whatwg-fetch';
import IResponse from "../l-utils/request/IResponse";
import API_MENUS from "./API_MENUS";
import GUIDE_MENUS from "./GUIDE_MENUS";

// import {IPayload} from "../utils/modelEnhance";

export interface IMenu {
    name: string;
    icon?: string;
    path: string,
    children?: IMenu[],
    parentPath?: string[],
    hideInMenu?: boolean
    target?: '_blank' | '_parent' | '_self' | '_top' | 'framename'
}


export default class Global {

    @observable public menu: IMenu[] = [];
    @observable public flatMenu: IMenu[] = [];
    @observable public searchStr: string = "";

    @action
    public async getMenu() {
        const {status, data} = await getMenus();

        if (status) {
            const menu = data;

            const loopMenu = (menu2: IMenu[], pitem?: IMenu) => {
                menu2.forEach((item: IMenu) => {
                    if (pitem && pitem.path) {
                        item.parentPath = pitem.parentPath ? pitem.parentPath.concat(pitem.path) : [pitem.path];
                    }
                    if (item.children && item.children.length) {
                        loopMenu(item.children, item);
                    }
                });
            };
            loopMenu(menu);

            runInAction(() => {
                this.menu = menu;
                this.flatMenu = getFlatMenu(menu);
            })


        }
    }

    @action
    public getGuideMenu(){
        const {data} = getGuideMenu();

        const menu = data;

        const loopMenu = (menu2: IMenu[], pitem?: IMenu) => {
            menu2.forEach((item: IMenu) => {
                if (pitem && pitem.path) {
                    item.parentPath = pitem.parentPath ? pitem.parentPath.concat(pitem.path) : [pitem.path];
                }
                if (item.children && item.children.length) {
                    loopMenu(item.children, item);
                }
            });
        };
        loopMenu(menu);
        this.menu = menu;
        this.flatMenu = getFlatMenu(menu);
    }

    @action
    public setSearchStr(str: string){
        this.searchStr = str;
    }
};


export function getFlatMenu(menus: IMenu[]) {
    let menu: IMenu[] = [];
    menus.forEach(item => {
        if (item.children) {
            menu = menu.concat(getFlatMenu(item.children));
        }
        menu.push(item);
    });
    return menu;
}

export async function getMenus(): Promise<IResponse> {

    // @ts-ignore
    // menus.push(...data);
    return {
        status: true,
        message: '',
        code: 200,
        data: API_MENUS
    };
}

export function getGuideMenu():IResponse {

    return {
        status: true,
        message: '',
        code: 200,
        data: GUIDE_MENUS
    };
}
