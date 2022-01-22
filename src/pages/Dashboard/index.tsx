import React, {ReactNode, useEffect, useState} from "react";
import {Outlet, NavLink, useLocation, useNavigate} from "react-router-dom";
import {Layout, Menu} from "@arco-design/web-react";
import {IRoute, routes} from "../../router";
import Header from "../../components/Header";
import styles from "./style/index.module.scss";

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

const Sider = Layout.Sider;
const Content = Layout.Content;

const Dashboard: React.FC = () => {
    const navRoutes = routes.filter(route => route.path === "/dashboard")[0]?.children;
    const {pathname} = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        if (pathname === "/dashboard") navigate("/dashboard/analysis");
    })
    const [collapsed, setCollapsed] = useState<boolean>(false);
    // 动态生成面包屑导航
    // const getBreadcrumb = (routes: IRoute[]) => {
    //     return (
    //         <>
    //             {
    //                 routes.map(route => {
    //                     if (matchPath(pathname, route.path) !== null) {
    //                         return (
    //                             <Fragment key={route.path}>
    //                                 <BreadcrumbItem>{route.title}</BreadcrumbItem>
    //                                 {
    //                                     route.children && getBreadcrumb(route.children)
    //                                 }
    //                             </Fragment>
    //                         )
    //                     }
    //                     return null;
    //                 })
    //             }
    //         </>
    //     )
    // }
    // 动态生成Menu列表
    const getMenus = (routes: IRoute[] | undefined): ReactNode => {
        if (!routes) return null;
        return (
            <>
                {
                    routes?.map(route => {
                        if (route.children) {
                            return (
                                <SubMenu key={route.path} title={
                                    <>
                                        {route.icon}
                                        {route.title}
                                    </>
                                }>
                                    {getMenus(route.children)}
                                </SubMenu>
                            )
                        }
                        return (
                            <NavLink to={route.path} key={route.path}>
                                <MenuItem key={route.path}>
                                    <strong>{route.icon}{route.title}</strong>
                                </MenuItem>
                            </NavLink>
                        )
                    })
                }
            </>
        )
    }
    return (
        <Layout className={styles.wrapper}>
            <Sider collapsed={collapsed} collapsible trigger={null} breakpoint='xl'>
                <Menu defaultSelectedKeys={Array.of(pathname)} style={{width: '100%'}}>
                    {getMenus(navRoutes)}
                </Menu>
            </Sider>
            <Layout className={styles.content_wrapper}>
                <Header/>
                <Content>
                    <Outlet/>
                </Content>
            </Layout>
        </Layout>
    )
}
export default Dashboard;