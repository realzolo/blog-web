import {Message} from "@arco-design/web-react";
import {getCategoryIcon} from "../../utils/category-icon";
import React, {useEffect, useState} from "react";
import {IArticle, IResponse} from "../../typings";
import {getArticles} from "../../net/fake";
import styles from "./style/article.module.scss";

// import LazyLoad from 'react-lazyload';
interface IProps {
    more: IArticle[],
    setMoreBtnVisible: (v: boolean) => void
}

const ArticleList: React.FC<IProps> = ({more, setMoreBtnVisible}) => {
    const [articles, setArticles] = useState<IArticle[]>([]);
    useEffect(() => {
        (async () => {
            const result: IResponse = await doFetchArticleList()
            if (!result) {
                Message.error("获取文章列表失败!");
                return;
            }
            setArticles(result.data);
        })()
    }, []);
    useEffect(() => {
        const newArr = articles.concat(more);
        const nonRepeatArray = Array.from(new Set(newArr));
        setArticles(nonRepeatArray)
    }, [more])
    // 根据文章数目觉得是否显示"更多按钮"
    useEffect(() => {
        setMoreBtnVisible(articles.length >= 6)
    }, [articles.length])
    /**
     * 获取文章列表
     */
    const doFetchArticleList = async (): Promise<IResponse> => {
        const response: IResponse = await getArticles(6);
        return response ? response.data : null;
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.headline_wrapper}>
                <svg d="1641322160168" className="icon" viewBox="0 0 1024 1024"
                     version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7970"
                     width="20" height="20">
                    <path
                        d="M849.1 128 174.9 128c-25.9 0-46.9 21-46.9 46.9l0 34.2c0 25.9 21 46.9 46.9 46.9l674.2 0c25.9 0 46.9-21 46.9-46.9l0-34.2C896 149 875 128 849.1 128z"
                        fill="var(--zolo-colors-theme)" p-id="7971"></path>
                    <path
                        d="M849.1 768 174.9 768c-25.9 0-46.9 21-46.9 46.9l0 34.2c0 25.9 21 46.9 46.9 46.9l674.2 0c25.9 0 46.9-21 46.9-46.9l0-34.2C896 789 875 768 849.1 768z"
                        fill="var(--zolo-colors-theme)" p-id="7972"></path>
                    <path
                        d="M849.1 448 174.9 448c-25.9 0-46.9 21-46.9 46.9l0 34.2c0 25.9 21 46.9 46.9 46.9l674.2 0c25.9 0 46.9-21 46.9-46.9l0-34.2C896 469 875 448 849.1 448z"
                        fill="var(--zolo-colors-theme)" p-id="7973"></path>
                </svg>
                <span>文章列表</span>
            </div>
            <ul className={styles.articles_wrapper}>
                {
                    articles.map((article) => {
                        return (
                            <li className={styles.article_item} key={article.aid}>
                                <div className={styles.cover_wrapper}
                                     onClick={() => window.open(`/posts/${article.aid}`)}>
                                    <svg d="1641374652392" className="icon"
                                         viewBox="0 0 1024 1024" version="1.1"
                                         xmlns="http://www.w3.org/2000/svg" p-id="9511"
                                         width="20" height="20">
                                        <path
                                            d="M400.696 268.795c-17.249 0-31.233 13.986-31.233 31.233v30.471c0 17.249 13.986 31.233 31.233 31.233s31.233-13.986 31.233-31.233v-30.471c0-17.249-13.985-31.233-31.233-31.233z"
                                            fill="var(--zolo-colors-white)" p-id="9512"></path>
                                        <path
                                            d="M623.649 361.734c17.249 0 31.234-13.986 31.234-31.233v-30.471c0-17.249-13.986-31.233-31.234-31.233s-31.233 13.986-31.233 31.233v30.471c-0.001 17.248 13.985 31.233 31.233 31.233z"
                                            fill="var(--zolo-colors-white)" p-id="9513"></path>
                                        <path
                                            d="M438.295 388.804c-14.656 9.104-19.155 28.362-10.050 43.013 11.209 18.047 41.976 48.59 86.157 48.59 43.958 0 75.1-30.313 86.574-48.223 9.303-14.529 5.068-33.847-9.455-43.15-14.539-9.298-33.852-5.068-43.15 9.455-0.122 0.199-13.38 19.45-33.969 19.45-20.009 0-32.444-18.128-33.278-19.373-9.166-14.423-28.28-18.805-42.829-9.761z"
                                            fill="var(--zolo-colors-white)" p-id="9514"></path>
                                        <path
                                            d="M824.508503 116.690676 571.592236 116.690676c-17.248849 0-31.233352 13.985526-31.233352 31.233352s13.985526 31.233352 31.233352 31.233352l252.916267 0c40.181141 0 72.878844 32.692586 72.878844 72.878844l0 396.966057-189.334159-165.29465c-12.20088-10.655687-30.517037-10.207479-42.173518 0.9967L468.578048 674.16231 309.521472 517.519714c-11.895935-11.70253-30.903847-12.002358-43.154869-0.645706L126.957507 646.163629l0-394.126382c0-40.186258 32.692586-72.878844 72.878844-72.878844l252.916267 0c17.248849 0 31.233352-13.985526 31.233352-31.233352S470.000444 116.690676 452.751594 116.690676L199.836351 116.690676c-74.632791 0-135.346571 60.71378-135.346571 135.346571l0 520.56405c0 74.632791 60.71378 135.346571 135.346571 135.346571l252.916267 0c17.248849 0 31.233352-13.985526 31.233352-31.233352s-13.985526-31.233352-31.233352-31.233352L199.836351 845.481164c-40.186258 0-72.878844-32.692586-72.878844-72.878844l0-41.23924 160.003134-148.385539 159.428036 157.007917c12.048407 11.865235 31.361265 11.981892 43.546795 0.274246l198.576661-190.68697 208.876238 182.346001 0 40.683585c0 40.186258-32.697703 72.878844-72.878844 72.878844L571.592236 845.481164c-17.248849 0-31.233352 13.985526-31.233352 31.233352s13.985526 31.233352 31.233352 31.233352l252.916267 0c74.627674 0 135.346571-60.71378 135.346571-135.346571L959.855074 252.037247C959.855074 177.404456 899.136178 116.690676 824.508503 116.690676z"
                                            fill="var(--zolo-colors-white)" p-id="9515"></path>
                                    </svg>
                                    {/*<LazyLoad*/}
                                    {/*    className={styles.lazyLoad_box}*/}
                                    {/*    placeholder={<img*/}
                                    {/*        src={lazyLoadImg} alt=""/>}*/}
                                    {/*    children={<img src={article.cover} alt="Cover"/>}*/}
                                    {/*/>*/}
                                    <img src={article.cover} alt=""/>
                                </div>
                                <div className={styles.metadata_wrapper}
                                     onClick={() => window.open(`/posts/${article.aid}`)}>
                                    <div className={styles.title_wrapper}><h2>{article.title}</h2></div>
                                    <div className={styles.intro_wrapper}><p>{article.intro}</p></div>
                                    <div className={styles.stats_wrapper}>
                                        <div className={styles.stats}>
                                            {/*<span>{new Date(article.created_at).toLocaleDateString().replaceAll("/", "-")}</span>*/}
                                            <span>{article.created_at}</span>
                                            <span>{article.hit_count}阅读</span>
                                            <span>{article.like_count}点赞</span>
                                            <span>{0}评论</span>
                                        </div>
                                        <div className={styles.icon} dangerouslySetInnerHTML={{
                                            __html: getCategoryIcon(article.category) +
                                                `<span>${article.category}</span>`
                                        }}/>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default ArticleList;