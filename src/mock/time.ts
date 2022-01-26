import {ITime} from "../typings";
import faker from "@faker-js/faker";

export const time: ITime = {
    hour_of_day: faker.datatype.number({min: 1, max: 24}),
    per_hour_of_day: faker.datatype.number({min: 1, max: 100}),
    day_of_week: faker.datatype.number({min: 1, max: 7}),
    per_day_of_week: faker.datatype.number({min: 1, max: 100}),
    day_of_month: faker.datatype.number({min: 1, max: 30}),
    per_day_of_month: faker.datatype.number({min: 1, max: 100}),
    month_of_year: faker.datatype.number({min: 1, max: 365}),
    per_month_of_year: faker.datatype.number({min: 1, max: 100}),
}