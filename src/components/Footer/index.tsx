import styles from "./style/index.module.css";

const Footer = () => {
    // const {icp, copyright} = props.webinfo;
    const pageLoadTimeCost = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    const httpTimeCost = window.performance.timing.responseEnd - window.performance.timing.requestStart;

    return (
        <div className={styles.container}>
            {/*{*/}
            {/*    icp ? <a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer"*/}
            {/*             className={styles.icp}>{icp}</a> : <></>*/}
            {/*}*/}
            <p className={styles.time}>页面加载耗时: {pageLoadTimeCost} ms, Http请求耗时: {httpTimeCost} ms</p>
            {/*{*/}
            {/*    copyright ? <div dangerouslySetInnerHTML={{__html: copyright}} className={styles.copyright}/> :*/}
            {/*        <div dangerouslySetInnerHTML={{__html: MOCK_WEBINFO.copyright}} className={styles.copyright}/>*/}
            {/*}*/}
        </div>
    )
}
export default Footer;