import faker from "@faker-js/faker";
import {IStats} from "../typings";

export const statsInfo: IStats = {
    daily_hits: faker.datatype.number({min: 0, max: 100}),
    total_hits: faker.datatype.number({min: 100}),
    daily_likes: faker.datatype.number({min: 0, max: 100}),
    total_likes: faker.datatype.number({min: 100}),
    daily_comments: faker.datatype.number({min: 0, max: 100}),
    total_comments: faker.datatype.number({min: 100}),
    daily_xxx: faker.datatype.number({min: 0, max: 100}),
    total_xxx: faker.datatype.number({min: 100}),
    monthly_visits: {
        january: faker.datatype.number({min: 0}),
        february: faker.datatype.number({min: 0}),
        march: faker.datatype.number({min: 0}),
        april: faker.datatype.number({min: 0}),
        may: faker.datatype.number({min: 0}),
        june: faker.datatype.number({min: 0}),
        july: faker.datatype.number({min: 0}),
        august: faker.datatype.number({min: 0}),
        september: faker.datatype.number({min: 0}),
        october: faker.datatype.number({min: 0}),
        november: faker.datatype.number({min: 0}),
        december: faker.datatype.number({min: 0})
    }
}