import HotCategory from "./HotCategory";
import ArticleList from "./ArticleList";
import {Card} from "@arco-design/web-react";
import styles from "./style/index.module.scss"
import MoreButton from "./MoreButton";
import {useState} from "react";
import {IArticle} from "../../typings";

const Content = () => {
    const [articles, setArticles] = useState<IArticle[]>([]);
    const [btnVisible, setBtnVisible] = useState<boolean>(false);
    //  接收来自btn获取的数据并存入state,传递给list组件
    const emitData = (arts: IArticle[]) => {
        setArticles(articles.concat(arts));
    }
    //根据list组件中内容条目的数量决定是否显示"获取更多按钮"
    const showMoreButton = (v: boolean) => {
        setBtnVisible(v);
    }
    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <Card className={styles.wrapper} bordered={false}>
                <HotCategory/>
                <ArticleList more={articles} setMoreBtnVisible={(v) => showMoreButton(v)}/>
            </Card>
            <MoreButton visible={btnVisible} emitData={(arts) => emitData(arts)}/>
        </div>
    )
}
export default Content;