import {IArticle} from "../typings";
import faker from "@faker-js/faker";

faker.setLocale("zh_CN");

export const articleList = (count: number): IArticle[] => {
    const articles: IArticle[] = [];
    for (let i = 0; i < count; i++) {
        articles.push({
            aid: faker.datatype.number({min: 0}),
            title: faker.name.title(),
            category: faker.word.noun(),
            intro: faker.hacker.phrase(),
            content: faker.hacker.phrase(),
            like_count: faker.datatype.number({min: 0}),
            hit_count: faker.datatype.number({min: 0}),
            comment_count: faker.datatype.number({min: 0}),
            created_at: faker.date.soon().toLocaleDateString().replaceAll("/", "-"),
            modified_at: faker.date.soon().toLocaleDateString().replaceAll("/", "-"),
            cover: faker.image.image(),
            state: true
        })
    }
    return articles;
}

