import React from "react";
import Navigate from "../../components/Header/Navigate";
import Footer from "../../components/Footer";
import styles from "./style/index.module.scss";
import Sidebar from "../../components/Sidebar";
import Content from "../../components/Content";

const Home: React.FC = () => {
    return (
        <>
            <Navigate/>
            <div className={styles.wrapper}>
                <Content/>
                <Sidebar/>
            </div>
            <Footer/>
        </>
    )
}
export default Home;