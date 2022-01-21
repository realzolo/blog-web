import React, {ComponentType, ReactNode} from "react";
import {IconBytedanceColor, IconLarkColor, IconTiktokColor, IconXiguaColor} from "@arco-design/web-react/icon";
import Manage from "../pages/Manage";
import Setting from "../pages/Setting";
import Analysis from "../pages/Analysis";
import Publish from "../pages/Publish";
import Profile from "../pages/Profile";

const Home = React.lazy(() => import("../pages/Home"));
const Login = React.lazy(() => import("../pages/Login"));

export interface IRoute {
    title: string,
    path: string,
    exact?: boolean,
    strict?: boolean,
    icon?: ReactNode,
    component?: ComponentType,
    children?: IRoute[]
}

export const routes: IRoute[] = [
    {
        title: "Home",
        path: "/",
        exact: true,
        component: Home
    },
    {
        title: "Login",
        path: "/login",
        exact: true,
        component: Login
    }
]

export const navRoutes: IRoute[] = [
    {
        title: "数据分析",
        path: "/dashboard/analysis",
        icon: <IconBytedanceColor/>,
        component: Analysis
    },
    {
        title: "文章管理",
        path: "/dashboard/article",
        icon: <IconTiktokColor/>,
        exact: true,
        strict: true,
        component: Manage
    },
    {
        title: "发布文章",
        path: "/dashboard/publish",
        icon: <IconTiktokColor/>,
        exact: true,
        strict: true,
        component: Publish
    },
    {
        title: "个人信息",
        path: "/dashboard/profile",
        icon: <IconTiktokColor/>,
        exact: true,
        strict: true,
        component: Profile
    },
    {
        title: "网站管理",
        path: "/dashboard/setting",
        exact: true,
        strict: true,
        icon: <IconLarkColor/>,
        component: Setting
    }
]

