import {IResponse} from "../typings";
import {HTTPStatusCode} from "../constant/status-code";
import {userList} from "../mock/user";
import {statsInfo} from "../mock/stats";
import {articleList} from "../mock/article";
import {time} from "../mock/time";
import {categoryList} from "../mock/category";

export const login = (username: string, password: string): Promise<any> => {
    return new Promise(((resolve, reject) => {
        const r = userList.filter(user => username === user.username && password === user.password);
        if (r.length > 0) {
            const res = {
                data: {
                    code: HTTPStatusCode.SUCCESS,
                    data: r[0],
                    message: "成功!"
                } as IResponse
            };
            resolve(res);
        } else {
            const res = {
                data: {
                    code: HTTPStatusCode.FAILURE,
                    data: null,
                    message: "失败!"
                } as IResponse
            };
            resolve(res);
        }
    }))
}
export const getUserInfo = (username: string): Promise<any> => {
    const r = userList.filter(user => username === user.username);
    return new Promise(((resolve, reject) => {
        const res = {
            data: {
                code: HTTPStatusCode.SUCCESS,
                data: r[0],
                message: "成功!"
            } as IResponse
        };
        resolve(res);
    }))
}
export const getStatsInfo = (): Promise<any> => {
    return new Promise(((resolve, reject) => {
        const res = {
            data: {
                code: HTTPStatusCode.SUCCESS,
                data: statsInfo,
                message: "成功!"
            } as IResponse
        };
        resolve(res);
    }))
}
export const getCategories = (count: number): Promise<any> => {
    return new Promise(((resolve, reject) => {
        const res = {
            data: {
                code: HTTPStatusCode.SUCCESS,
                data: categoryList(count),
                message: "成功!"
            } as IResponse
        };
        resolve(res);
    }))
}

export const getArticles = (count: number): Promise<any> => {
    return new Promise(((resolve, reject) => {
        const res = {
            data: {
                code: HTTPStatusCode.SUCCESS,
                data: articleList(count),
                message: "成功!"
            } as IResponse
        };
        resolve(res);
    }))
}

export const getTime = (): Promise<any> => {
    return new Promise(((resolve, reject) => {
        const res = {
            data: {
                code: HTTPStatusCode.SUCCESS,
                data: time,
                message: "成功!"
            } as IResponse
        };
        resolve(res);
    }))
}