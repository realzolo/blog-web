import {NavLink} from "react-router-dom";
import {Input} from "@arco-design/web-react";
import {IconSearch} from "@arco-design/web-react/icon";
import styles from "./style/navigate.module.scss";

const Navigate = () => {
    const menus = [
        {name: "首页", to: "/"},
        {name: "登录", to: "/login"},
        {name: "日志", to: "/log"},
        {name: "归档", to: "/archive"},
        {name: "关于", to: "/about"},
    ]
    return (
        // <div className={`${styles.wrapper} animate__animated`} id="header">
        <div className={`${styles.wrapper}`} id="header">
            <div className={styles.content_wrapper}>
                <div className={styles.left_wrapper}>
                    <div className={styles.logo_wrapper}>
                        <img src="https://blog.onezol.com/img/logo.png" alt="Logo"/>
                    </div>
                    <div className={styles.menu_wrapper}>
                        {
                            menus.map((menu, index) => {
                                return <NavLink to={menu.to} key={index}>{menu.name}</NavLink>
                            })
                        }
                    </div>
                </div>
                <div className={styles.right_wrapper}>
                    <Input disabled={true} placeholder="搜索功能暂不可用!" className={styles.search_input}
                           suffix={<IconSearch className={styles.search_button}/>}/>
                </div>
            </div>
        </div>
    )
}
export default Navigate;