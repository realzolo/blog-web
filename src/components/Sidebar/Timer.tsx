import {Card, Progress} from "@arco-design/web-react";
import {useEffect} from "react";

const Timer = () => {
    return(
        <Card title={<h1>人生计时</h1>} style={{marginTop: 10}}>
            <div>
                <label>今日已经过去 22 小时</label>
                <Progress size="large" percent={80} animation color={{
                    '0%': 'rgb(var(--primary-6))',
                    '100%': 'rgb(var(--success-6))',
                }}
                />
            </div>
            <div>
                <label>今日已经过去 22 小时</label>
                <Progress size="large" percent={80} animation color={{
                    '0%': 'rgb(var(--primary-6))',
                    '100%': 'rgb(var(--success-6))',
                }}
                />
            </div>
            <div>
                <label>今日已经过去 22 小时</label>
                <Progress size="large" percent={80} animation color={{
                    '0%': 'rgb(var(--primary-6))',
                    '100%': 'rgb(var(--success-6))',
                }}
                />
            </div>
            <div>
                <label>今日已经过去 22 小时</label>
                <Progress size="large" percent={80} animation color={{
                    '0%': 'rgb(var(--primary-6))',
                    '100%': 'rgb(var(--success-6))',
                }}
                />
            </div>
        </Card>
    )
}
export default Timer;