import {Button} from "@arco-design/web-react";
import styles from "./style/button.module.scss";
import {IArticle, IResponse} from "../../typings";
import React from "react";
import {getArticles} from "../../net/fake";

interface IProps {
    visible: boolean,
    emitData: (articles: IArticle[]) => void
}

const MoreButton: React.FC<IProps> = ({visible, emitData}) => {
    const doFetchMore = async () => {
        // 1. 获取当前内容条数并发送请求获取数据
        // 2. 将数据发送给List组件
        // emitData([1,2,3]);
        const result:IResponse = await fetchArticles();
        emitData(result.data);
    }
    const fetchArticles = async () => {
        const response: IResponse = await getArticles(3);
        return response ? response.data : null;
    }
    return (
        <>
            {
                visible && (
                    <div className={styles.wrapper}>
                        <Button type="secondary" onClick={doFetchMore} className={styles.button}>查看更多</Button>
                    </div>
                )
            }
        </>
    )
}
export default MoreButton;