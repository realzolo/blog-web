import {UserList} from "../mock/user";
import {IResponse} from "../typings";
import {HTTPStatusCode} from "../constant/status-code";
import {stats_info} from "../mock/stats";

export const login = (username: string, password: string): Promise<any> => {
    return new Promise(((resolve, reject) => {
        const r = UserList.filter(user => username === user.username && password === user.password);
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
export const getStatsInfo = (): Promise<any> => {
    return new Promise(((resolve, reject) => {
        const res = {
            data: {
                code: HTTPStatusCode.SUCCESS,
                data: stats_info,
                message: "成功!"
            } as IResponse
        };
        resolve(res);
    }))
}