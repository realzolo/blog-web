import {ITime} from "../typings";

export const time: ITime = {
    hour_of_day: Math.floor(Math.random() * 24),
    per_hour_of_day: Math.floor(Math.random() * 100),
    day_of_week: Math.floor(Math.random() * 7),
    per_day_of_week: Math.floor(Math.random() * 100),
    day_of_month: Math.floor(Math.random() * 30),
    per_day_of_month: Math.floor(Math.random() * 100),
    month_of_year: Math.floor(Math.random() * 365),
    per_month_of_year: Math.floor(Math.random() * 100),
}