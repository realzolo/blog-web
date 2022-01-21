import React, {useState} from "react";
import {Button, Card, Form, Grid, Input, Select, Upload} from "@arco-design/web-react";
import MarkdownEditor from '@uiw/react-markdown-editor';

const Row = Grid.Row;
const Col = Grid.Col;
const FormItem = Form.Item;
const Publish: React.FC = () => {
    const [content, setContent] = useState<string>("");
    const [form] = Form.useForm();
    // 发布文章操作
    const doPush = () => {
        const {title, category, intro} = form.getFieldsValue();
        console.log(title, category, intro, /*content*/);
    }
    // 读取md文件中的内容
    const doFileReader = (file: File): boolean => {
        const reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.onload = (e => {
            const content = e.target!.result as string;
            setContent(content);
        })
        return false
    }
    return (
        <Card style={{marginTop: 15}}>
            <Upload
                drag
                action="/upload"
                accept='*.md'
                limit={1}
                data={{}}  //  上传参数
                showUploadList={false}
                tip='Only pdf, png, jpg can be uploaded, and the size does not exceed 100MB'
                beforeUpload={doFileReader}
            />
            <Form style={{marginTop: 15}} form={form}>
                <Row gutter={10} style={{width: "100%"}}>
                    <Col span={6}>
                        <FormItem label='标题' field="title">
                            <Input placeholder='请输入标题'/>
                        </FormItem>
                    </Col>
                    <Col span={5}>
                        <FormItem label='分类' field='category'>
                            <Select
                                placeholder='请选择分类'
                                options={[
                                    {label: 'Java', value: "Java"},
                                    {label: 'Spring', value: "Spring"},
                                    {label: 'TS', value: "TS"},
                                ]}
                                allowClear
                            />
                        </FormItem>
                    </Col>
                    <Col span={10}>
                        <FormItem label='简述' field="intro">
                            <Input placeholder='请简要描述文章...'/>
                        </FormItem>
                    </Col>
                    <Col span={3} style={{textAlign: "end"}}>
                        <Button type="primary" status="default" onClick={doPush}>立即发布</Button>
                    </Col>
                </Row>
            </Form>
            <MarkdownEditor
                value={content}
                height={300}
                onChange={(editor: any, data: any, value: string) => setContent(value)}
            />
        </Card>
    )
}
export default Publish;