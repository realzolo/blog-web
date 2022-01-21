import React, {useEffect, useState} from "react";
import Charts from "./Charts";
import Stats from "./Stats";
import {getStatsInfo} from "../../net";
import {IResponse, IStats} from "../../typings";
import {Message} from "@arco-design/web-react";

const Analysis: React.FC = () => {
    const [stats, setStats] = useState<IStats>({} as IStats);
    useEffect(() => {
        (async () => {
            const result: IResponse = await fetchStatsInfo();
            if (!result) {
                Message.error("数据获取失败!");
                return;
            }
            setStats(result.data);
        })()
    }, [])
    const fetchStatsInfo = async () => {
        const response = await getStatsInfo();
        return response ? response.data : null;
    }
    return (
        <>
            <Stats data={stats}/>
            <Charts data={stats.monthly_visits}/>
        </>
    )
}
export default Analysis;