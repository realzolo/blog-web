// HTTP Response
export interface IResponse {
    code: number,
    data: any | null,
    message: string
}

// User model
export interface IUserInfo {
    nickname: string,
    username: string,
    avatar?: string,
    wechat?: string,
    qq?: string,
    email?: string,
    bilibili?: string,
    github?: string
    // ...
}

export interface IUserState {
    userinfo: IUserInfo
}

export interface IUserAction {
    type: UserActionType,
    payload: IUserState
}

export enum UserActionType {
    ADD_USER
}

// Article model
export interface IArticle {
    aid: number,
    title: string,
    category: string,
    content?: string,
    like_count: number,
    hit_count: number,
    created_at: string,
    modified_at: string,
    state: boolean
}

// Analysis Stats
export interface IStats {
    daily_visits: number,
    total_visits: number,
    daily_likes: number,
    total_likes: number,
    daily_comments: number,
    total_comments: number,
    daily_xxx: number,
    total_xxx: number,
    monthly_visits: any
}