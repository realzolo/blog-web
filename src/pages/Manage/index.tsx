import React, {useState} from "react";
import {Button, Message, Popconfirm, Space, Switch, Table} from "@arco-design/web-react";
import {IArticle} from "../../typings";
import Editor from "./Editor";

const Manage: React.FC = () => {
    const [visible,setVisible] = useState(false);
    const [curOpArticle,setCurOpArticle] = useState({} as IArticle);
    // 编辑按钮操作
    const doModify = (record: IArticle) => {
        setVisible(true);
        setCurOpArticle(record);
    }
    // 回收Edit Modal
    const doCallback = () => {
        setVisible(false);
    }
    // 接受Editor的数据
    const doSave = (data: IArticle) => {
        setCurOpArticle(data);  // 将目标数据写入state
        console.log(curOpArticle);
    }
    // 改变状态
    const doChangeState = (record: IArticle) => {
        const {state} = record;
        setCurOpArticle({...curOpArticle,state: !state});
        Message.success("删除成功(假的)!");
    }
    // 删除
    const doDelete = (record: IArticle) => {
        Message.success("删除成功(假的)!");
    }
    const columns = [
        {title: 'ID', dataIndex: 'aid',},
        {title: '标题', dataIndex: 'title',},
        {title: '分类', dataIndex: 'category',},
        {title: '获赞', dataIndex: 'like_count',},
        {title: '浏览', dataIndex: 'hit_count',},
        {title: '发布日期', dataIndex: 'created_at',},
        {title: '修改日期', dataIndex: 'modified_at',},
        {
            title: '状态', dataIndex: 'state', render: (col: any, record: IArticle) => (
                <Switch checked={record.state} key={record.aid} onChange={() => doChangeState(record)}/>
            )
        },
        {
            title: '操作', dataIndex: 'operation', width: 180, render: (col: any, record: IArticle) => (
                <Space>
                    <Button onClick={() => doModify(record)} type="primary">修改</Button>
                    <Popconfirm title='确定要删除吗?' onOk={() => doDelete(record)}>
                        <Button type="primary" status="danger">删除</Button>
                    </Popconfirm>
                </Space>
            )
        }
    ];

    const data = [
        {
            aid: 1,
            title: 'Jane Doe',
            category: "23000",
            like_count: 324,
            hit_count: 1234,
            created_at: new Date().toLocaleTimeString(),
            modified_at: new Date().toLocaleTimeString(),
            state: true
        },
        {
            aid: 2,
            title: 'Jane ',
            category: "2000",
            like_count: 24,
            hit_count: 12,
            created_at: new Date().toLocaleTimeString(),
            modified_at: new Date().toLocaleTimeString(),
            state: true
        }
    ];
    return (
        <div style={{margin: "1.5rem 0"}}>
            <Table columns={columns} data={data} rowKey="aid"/>
            <Editor visible={visible} callback={doCallback} data={curOpArticle} save={doSave}/>
        </div>
    )
}
export default Manage