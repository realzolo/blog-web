import React, {useEffect} from "react";
import {IArticle} from "../../typings";
import {Form, Input, Modal} from "@arco-design/web-react";

const FormItem = Form.Item;

interface IProps {
    visible: boolean,
    callback: () => void,
    data: IArticle,
    save: (data: IArticle) => void
}

const Editor: React.FC<IProps> = ({visible, callback, data, save}) => {
    const [form] = Form.useForm();
    useEffect(() => {
        form.setFieldsValue({title: data.title, category: data.category, content: data.content})
    })
    const doOk = () => {
        const {title, category, content} = form.getFieldsValue();
        save({...data, title, category, content});
        callback();
    }
    return (
        <Modal title={data.title} visible={visible} onOk={doOk} onCancel={() => callback()} autoFocus={false}
               focusLock={true}
        >
            <Form form={form}>
                <FormItem label='标题' field='title'>
                    <Input/>
                </FormItem>
                <FormItem label='分类' field='category'>
                    <Input/>
                </FormItem>
                <FormItem label='内容' field='content'>
                    <Input placeholder='这里是内容...'/>
                </FormItem>
            </Form>
        </Modal>
    )
}
export default Editor;