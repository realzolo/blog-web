import React, {useEffect} from "react";
import {Form, Input, Modal} from "@arco-design/web-react";
import {IUser} from "../../typings";

const FormItem = Form.Item;

interface IProps {
    visible: boolean,
    callback: () => void,
    data: IUser
}

const SocialAccountEditor: React.FC<IProps> = ({visible, callback, data}) => {
    const [form] = Form.useForm();
    useEffect(() => {
        form.setFieldsValue({...data});
    }, [data])
    // 此处保存信息到数据库
    const handleData = () => {
        const values = form.getFieldsValue();
        console.log(values);
        callback();
    }
    return (
        <Modal
            title='Modal Title'
            visible={visible}
            onOk={handleData}
            onCancel={callback}
            autoFocus={false}
            focusLock={true}
        >
            <Form form={form} layout="vertical">
                <FormItem label="微信" field="wechat">
                    <Input/>
                </FormItem>
                <FormItem label="QQ" field="qq">
                    <Input/>
                </FormItem>
                <FormItem label="邮箱" field="email">
                    <Input/>
                </FormItem>
                <FormItem label="BiliBili" field="bilibili">
                    <Input/>
                </FormItem>
                <FormItem label="Github" field="github">
                    <Input/>
                </FormItem>
            </Form>
        </Modal>
    )
}
export default SocialAccountEditor;