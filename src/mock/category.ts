import {ICategory} from "../typings";
import faker from "@faker-js/faker";

faker.setLocale("zh_CN");

export const categoryList = (count: number): ICategory[] => {
    const articles: ICategory[] = [];
    for (let i = 0; i < count; i++) {
        articles.push({
            cid: faker.datatype.number({min:0}),
            name: faker.name.jobType(),
            cover: faker.image.image()
        })
    }
    return articles;
}

