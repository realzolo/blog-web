import React, {useEffect, useState} from "react";
import {IArticle} from "../../typings";
import {Form, Input, Modal} from "@arco-design/web-react";
import MarkdownEditor from "@uiw/react-markdown-editor";

const FormItem = Form.Item;

interface IProps {
    visible: boolean,
    callback: () => void,
    data: IArticle,
    save: (data: IArticle) => void
}

const Editor: React.FC<IProps> = ({visible, callback, data, save}) => {
    const [content, setContent] = useState<string>("");
    const [form] = Form.useForm();
    useEffect(() => {
        form.setFieldsValue({title: data.title, category: data.category});
        setContent(data.content || "");
    }, [data])
    const doOk = () => {
        const {title, category} = form.getFieldsValue();
        save({...data, title, category, content});
        callback();
    }
    return (
        <Modal title={data.title}
               visible={visible}
               onOk={doOk}
               onCancel={() => callback()} autoFocus={false}
               focusLock={true}
               maskClosable={false}
               style={{width: 800}}
        >
            <Form form={form} layout="vertical">
                <FormItem label='标题' field='title'>
                    <Input/>
                </FormItem>
                <FormItem label='分类' field='category'>
                    <Input/>
                </FormItem>
            </Form>
            <MarkdownEditor
                value={content}
                height={300}
                onChange={(editor: any, data: any, value: string) => setContent(value)}
            />
        </Modal>
    )
}
export default Editor;