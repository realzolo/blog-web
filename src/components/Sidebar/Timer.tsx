import {Card, Progress} from "@arco-design/web-react";
import commonStyles from "./style/common.module.scss";
import {Space} from "@arco-design/web-react";
import {useEffect, useState} from "react";
import {IResponse, ITime} from "../../typings";
import {getTime} from "../../net/fake";

const Timer = () => {
    const [time, setTime] = useState<ITime>({} as ITime);
    useEffect(() => {
        (async () => {
            const result: IResponse = await fetchTime();
            if (!result) {
                return;
            }
            setTime(result.data);
        })()
    }, [])
    const fetchTime = async () => {
        const response: IResponse = await getTime();
        return response ? response.data : null;
    }
    const titleElement = (
        <div className={commonStyles.headline}>
            <svg d="1641321078149" className="icon" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="5288" width="20" height="20">
                <path
                    d="M895.86 935.71c0.84-13.62 0.84-27.28 0-40.89-0.03-143.54-80.24-275.03-207.85-340.74 172.18-88.72 251.14-291.94 184-473.63a41.736 41.736 0 0 0 23.85-37.48c0-11.3-4.49-22.12-12.48-30.12A42.581 42.581 0 0 0 853.26 0.38H171.78c-23.52 0-42.6 19.07-42.6 42.59a41.723 41.723 0 0 0 23.86 38.33c-66.64 181.45 12.24 384.12 184 472.78-127.61 65.71-207.83 197.2-207.85 340.74a332.06 332.06 0 0 0 0 40.89c-11.6-0.01-22.7 4.71-30.73 13.07A42.592 42.592 0 0 0 86.6 980c0 23.52 19.07 42.59 42.59 42.59h764.97c11.59 0.47 22.86-3.81 31.22-11.86A42.59 42.59 0 0 0 938.45 980a42.551 42.551 0 0 0-11.86-31.22 42.613 42.613 0 0 0-30.73-13.07zM214.37 213.34c-0.02-44.22 9.88-87.89 28.96-127.78H781.7c52.68 110.61 32.32 242.18-51.31 331.71-83.63 89.53-213.52 118.78-327.46 73.75C289 446 214.2 335.85 214.37 213.34z m596.3 722.37H216.93c-0.88-13.62-0.88-27.28 0-40.89 0-164.66 133.49-298.15 298.15-298.15 164.66 0 298.15 133.49 298.15 298.15-0.82 13.73-2.53 27.39-5.11 40.89h2.55zM732.3 344.52H292.74c46.04 77.58 129.56 125.15 219.78 125.15 90.21 0 173.75-47.56 219.78-125.15z m0 0"
                    fill="var(--zolo-colors-theme)" p-id="5289"></path>
            </svg>
            <span className={commonStyles.headline_font}>人生计时</span>
        </div>
    )
    return (
        <Card title={titleElement} bordered={false}>
            <Space direction="vertical" style={{width: "100%"}}>
                <div>
                    <span>今日已经过去 {time.hour_of_day} 小时</span>
                    <Progress size="large" percent={time.per_hour_of_day} animation color={{
                        '0%': 'var(--zolo-colors-blue-200)',
                        '100%': 'var(--zolo-colors-blue-500)',
                    }}
                    />
                </div>
                <div>
                    <span>本周已经过去 {time.day_of_week} 天</span>
                    <Progress size="large" percent={time.per_day_of_week} animation color={{
                        '0%': 'var(--zolo-colors-green-200)',
                        '100%': 'var(--zolo-colors-green-500)',
                    }}
                    />
                </div>
                <div>
                    <span>本月已经过去 {time.day_of_month} 天</span>
                    <Progress size="large" percent={time.per_day_of_month} animation color={{
                        '0%': 'var(--zolo-colors-orange-200)',
                        '100%': 'var(--zolo-colors-orange-500)',
                    }}
                    />
                </div>
                <div>
                    <span>今年已经过去 {time.month_of_year} 个月</span>
                    <Progress size="large" percent={time.per_day_of_month} animation color={{
                        '0%': 'var(--zolo-colors-red-200)',
                        '100%': 'var(--zolo-colors-red-500)',
                    }}
                    />
                </div>
            </Space>
        </Card>
    )
}
export default Timer;