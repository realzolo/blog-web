import styles from "./style/index.module.scss";
import Profile from "./Profile";
import Notice from "./Notice";
import Timer from "./Timer";
import AD from "./AD";

const Sidebar = () => {
    return (
        <div className={styles.wrapper}>
            <Profile/>
            <Notice/>
            <Timer/>
            <AD/>
        </div>
    )
}
export default Sidebar;