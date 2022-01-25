import HotCategory from "./HotCategory";
import ArticleList from "./ArticleList";
import {Card} from "@arco-design/web-react";
import styles from "./style/index.module.scss"

const Content = () => {

    return (
        <Card className={styles.wrapper}>
            <HotCategory/>
            <ArticleList/>
        </Card>
    )
}
export default Content;