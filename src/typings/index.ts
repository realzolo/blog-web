// HTTP Response
export interface IResponse {
    code: number,
    data: any | null,
    message: string
}

// User model
export interface IUser {
    nickname: string,
    username: string,
    password?: string,
    avatar?: string,
    background?: string,
    wechat?: string,
    qq?: string,
    email?: string,
    bilibili?: string,
    github?: string,
    create_at?: string
    // ...
}

// Category Model
export interface ICategory {
    cid: number,
    name: string,
    cover: string,
    // ...
}

// Article model
export interface IArticle {
    aid: number,
    title: string,
    category: string,
    intro: string,
    cover: string,
    content?: string,
    like_count: number,
    hit_count: number,
    comment_count: number,
    created_at: string,
    modified_at: string,
    state: boolean
}

// Analysis Stats
export interface IStats {
    daily_hits: number,
    total_hits: number,
    daily_likes: number,
    total_likes: number,
    daily_comments: number,
    total_comments: number,
    daily_xxx: number,
    total_xxx: number,
    monthly_visits: any
}

// Timer Model
export interface ITime {
    hour_of_day: number,
    per_hour_of_day: number,
    day_of_week: number,
    per_day_of_week: number,
    day_of_month: number,
    per_day_of_month: number,
    month_of_year: number,
    per_month_of_year: number
}

// UserReducer Model
export interface IUserState {
    user: IUser
}

export interface IUserAction {
    type: UserActionType,
    payload: IUserState
}

export enum UserActionType {
    ADD_USER
}
