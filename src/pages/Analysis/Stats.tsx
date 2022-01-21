import {Card, Grid, Tag} from "@arco-design/web-react";
import {IconXiguaColor} from "@arco-design/web-react/icon";
import React from "react";
import {IStats} from "../../typings";

const Row = Grid.Row;
const Col = Grid.Col;

interface IProps {
    data: IStats
}

const Stats: React.FC<IProps> = ({data}) => {
    return (
        <Card style={{margin: "15px 0"}}>
            <Row gutter={15}>
                <Col span={6}>
                    <Card title="访问数量" extra={<Tag color='#0fc6c2'>日</Tag>}>
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            <span>{data.daily_visits}</span>
                            <IconXiguaColor/>
                        </div>
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            <span>访问总数</span>
                            <span>{data.total_visits}</span>
                        </div>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title="点赞数量" extra={<Tag color='#00b42a'>周</Tag>}>
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            <span>{data.daily_likes}</span>
                            <IconXiguaColor/>
                        </div>
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            <span>点赞总数</span>
                            <span>{data.total_likes}</span>
                        </div>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title="留言数量" extra={<Tag color='#ff5722'>月</Tag>}>
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            <span>{data.daily_comments}</span>
                            <IconXiguaColor/>
                        </div>
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            <span>留言总数</span>
                            <span>{data.total_comments}</span>
                        </div>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title="文章数量" extra={<Tag color='#b71de8'>年</Tag>}>
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            <span>{data.daily_xxx}</span>
                            <IconXiguaColor/>
                        </div>
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            <span>文章总数</span>
                            <span>{data.total_xxx}</span>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Card>
    )
}
export default Stats;