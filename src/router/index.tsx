import React, {ReactElement, ReactNode} from "react";
import {IconBytedanceColor, IconLarkColor, IconTiktokColor, IconXiguaColor} from "@arco-design/web-react/icon";
import Manage from "../pages/Manage";
import Setting from "../pages/Setting";
import Analysis from "../pages/Analysis";
import Publish from "../pages/Publish";
import Profile from "../pages/Profile";
import Dashboard from "../pages/Dashboard";

const Home = React.lazy(() => import("../pages/Home"));
const Login = React.lazy(() => import("../pages/Login"));

export interface IRoute {
    title: string,
    path: string,
    index?: boolean,
    icon?: ReactNode,
    element?: ReactElement,
    children?: IRoute[]
}

export const routes: IRoute[] = [
    {
        title: "Home",
        path: "/",
        element: <Home/>
    },
    {
        title: "Login",
        path: "/login",
        element: <Login/>
    },
    {
        title: "Dashboard",
        path: "/dashboard",
        element: <Dashboard/>,
        children: [
            {
                title: "数据分析",
                index: true,  // 不生效
                path: "analysis",
                icon: <IconBytedanceColor/>,
                element: <Analysis/>
            },
            {
                title: "文章管理",
                path: "article",
                icon: <IconTiktokColor/>,
                element: <Manage/>
            },
            {
                title: "发布文章",
                path: "publish",
                icon: <IconXiguaColor/>,
                element: <Publish/>
            },
            {
                title: "个人信息",
                path: "profile",
                icon: <IconXiguaColor/>,
                element: <Profile/>
            },
            {
                title: "网站管理",
                path: "setting",
                icon: <IconLarkColor/>,
                element: <Setting/>
            }
        ]
    }
]
