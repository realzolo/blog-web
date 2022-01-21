import {IRoute} from "../router";
import {Fragment, ReactNode} from "react";
import {Route} from "react-router-dom";
/**
 * 根据路由树递归生成路由条目
 * @param routeList
 */
export const generateRoutes = (routeList: IRoute[]): ReactNode => {
    return (
        <>
            {
                routeList?.map(route => {
                    if (route.children) {
                        return (
                            <Fragment key={route.path}>
                                {generateRoutes(route.children)}
                            </Fragment>
                        )
                    }
                    return (
                        <Route key={route.path} path={route.path} exact={route.exact} strict={route.strict}
                               component={route.component}/>
                    )
                })
            }
        </>
    )
}


