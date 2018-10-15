/**
 * Created by 姚应龙 on 2018/10/12
 */
import {createRoute} from "../../utils/core";
import TabsPage from "./components/TabsPage";
import Model from './models'

export default createRoute({component: TabsPage, path: "/api", model:{name:'tabs', modelClass: Model}})