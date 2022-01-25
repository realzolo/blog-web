import styles from "./style/index.module.scss";
import Profile from "./Profile";
import Notice from "./Notice";
import Timer from "./Timer";
import AD from "./AD";
import {Space} from "@arco-design/web-react";

const Sidebar = () => {
    return (
        <div className={styles.wrapper}>
            <Space direction="vertical" size={12}>
                <Profile/>
                <Notice/>
                <Timer/>
                <AD/>
            </Space>
        </div>
    )
}
export default Sidebar;