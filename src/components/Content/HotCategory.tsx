import {useEffect, useState} from "react";
import styles from "./style/category.module.scss";
import {ICategory, IResponse} from "../../typings";
import {getCategories} from "../../net/fake";

const HotCategory = () => {
    const [categories, setCategories] = useState<ICategory[]>([]);
    useEffect(() => {
        (async () => {
            const result: IResponse = await fetchCategories();
            if (!result) {
                return;
            }
            setCategories(result.data);
        })()
    }, [])
    const fetchCategories = async () => {
        const response: IResponse = await getCategories(4);
        return response ? response.data : null;
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.headline_wrapper}>
                <svg d="1641321156814" className="icon" viewBox="0 0 1024 1024"
                     version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="6136" width="20" height="20">
                    <path
                        d="M745.23 263.98c5.77 59.86 1.04 109.8-14.21 149.66-15.24 40.01-42.39 73.51-81.38 100.74 38.84-129.43 25.75-237.41-39.58-323.84C544.73 103.96 446.03 40.52 313.82 0c34.55 75.49 34.55 155.35 0 239.6C262.03 366.04 56.57 445.39 68.7 675.28c12.21 229.96 222.33 354.94 460.56 346.33 234.91-8.4 380.07-171.19 411.07-279.75 48.76-170.54-16.28-329.83-195.1-477.88z m73.69 240.11c36.11 68.84 42.47 137.9 21.97 209.74-27.67 96.73-156.85 199.52-315.33 205.21-202.06 7.3-345.44-93.44-353.58-249.09-4.07-75.12 19.83-125.64 86.19-198.2l60.52-63.51 13.98-15.18 14.8-16.79c27.97-33.07 48.02-63.51 62.15-97.97a448.223 448.223 0 0 0 29.82-108.48c33.71 22.44 63.41 50.24 87.9 82.27 41.43 54.9 52.01 123.67 28.41 214.48l-5.18 18.47-36.47 122.28-1.78 8.4c-0.84 5.75-0.82 11.6 0.08 17.35 5 32.16 35.47 54.24 68.06 49.31l10.06-1.53c77.69-33.65 147.75-92.57 210.19-176.74l9.32-15.84 8.89 15.82z"
                        fill="var(--zolo-colors-theme)" p-id="6137"></path>
                </svg>
                <span>热门分类</span>
            </div>
            <ul className={styles.categories_wrapper}>
                {
                    categories.map((category, index) => {
                        return (
                            <li key={index} className={styles.category_item}>
                                <img src={category.cover} alt={category.name}/>
                                <div className={styles.category_item_name}>{category.name}</div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default HotCategory;