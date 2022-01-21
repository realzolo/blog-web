import React from "react";
import {Spin} from "@arco-design/web-react";
import styles from "./style/index.module.scss";

const Loading: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <Spin dot/>
        </div>
    )
}
export default Loading;