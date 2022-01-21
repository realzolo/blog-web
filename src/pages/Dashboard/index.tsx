import React, {Fragment, PropsWithChildren, ReactNode, useState} from "react";
import {matchPath, NavLink} from "react-router-dom";
import {Breadcrumb, Layout, Menu} from "@arco-design/web-react";
import {IRoute, navRoutes} from "../../router";
import {generateRoutes} from "../../utils/generate-routes";
import Header from "../../components/Header";
import styles from "./style/index.module.scss";

const BreadcrumbItem = Breadcrumb.Item;
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

const Sider = Layout.Sider;
const Content = Layout.Content;

const Dashboard: React.FC<PropsWithChildren<any>> = (props  ) => {
    const {pathname} = props.location;
    if (pathname === "/dashboard") props.history.replace("/dashboard/analysis")
    const [collapsed, setCollapsed] = useState(false);
    // 动态生成面包屑导航
    const getBreadcrumb = (routeList: IRoute[]) => {
        return (
            <>
                {
                    routeList.map(route => {
                        if (matchPath(pathname, {path: route.path}) !== null) {
                            return (
                                <Fragment key={route.path}>
                                    <BreadcrumbItem>{route.title}</BreadcrumbItem>
                                    {
                                        route.children && getBreadcrumb(route.children)
                                    }
                                </Fragment>
                            )
                        }
                        return null;
                    })
                }
            </>
        )
    }
    // 动态生成Menu列表
    const getMenus = (routeList: IRoute[]): ReactNode => {
        return (
            <>
                {
                    routeList?.map(route => {
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
                                    {route.icon}{route.title}
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
                <Menu defaultSelectedKeys={Array.of(pathname)}
                      style={{width: '100%'}}>
                    {getMenus(navRoutes)}
                </Menu>
            </Sider>
            <Layout className={styles.content_wrapper}>
                <Header/>
                <Content>
                    {generateRoutes(navRoutes)}
                </Content>
            </Layout>
        </Layout>
    )
}
export default Dashboard;