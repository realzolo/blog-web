import {AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Area, ResponsiveContainer} from 'recharts';
import {Card} from "@arco-design/web-react";
import React from "react";

interface IMonthlyStats {
    january: number,
    february: number,
    march: number,
    april: number,
    may: number,
    june: number,
    july: number,
    august: number,
    september: number,
    october: number,
    november: number,
    december: number
}

interface IProps {
    data: IMonthlyStats
}

const Charts: React.FC<IProps> = ({data}) => {
    const chart_data = [
        {name: 'January', uv: 4000, pv: data?.january},
        {name: 'February', uv: 4000, pv: data?.february},
        {name: 'March', uv: 4000, pv: data?.march},
        {name: 'April', uv: 4000, pv: data?.april},
        {name: 'May', uv: 3000, pv: data?.may},
        {name: 'June', uv: 2000, pv: data?.june},
        {name: 'July', uv: 2780, pv: data?.july},
        {name: 'August', uv: 1890, pv: data?.august},
        {name: 'September', uv: 2390, pv: data?.september},
        {name: 'October', uv: 3490, pv: data?.october},
        {name: 'November', uv: 3490, pv: data?.november},
        {name: 'December', uv: 3490, pv: data?.december},
    ];
    return (
        <Card style={{margin: "15px 0"}}>
            <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={chart_data} margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Area type="monotone" dataKey="pv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)"/>
                    {/*<Area type="monotone" dataKey="uv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)"/>*/}
                </AreaChart>
            </ResponsiveContainer>
        </Card>
    )
}
export default Charts;