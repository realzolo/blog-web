import {Form, Input, Modal, Switch} from "@arco-design/web-react";
import React, {useEffect} from "react";
import {IUser} from "../../typings";

const FormItem = Form.Item;

interface IProps {
    visible: boolean,
    callback: () => void,
    data: IUser
}

const MailEditor: React.FC<IProps> = ({visible, callback, data}) => {
    const [form] = Form.useForm();
    useEffect(() => {
        form.setFieldsValue({email: data.email});
    }, [data])
    const handleData = () => {
        const values = form.getFieldsValue();
        console.log(values);
    }
    return (
        <Modal
            title='修改密码'
            visible={visible}
            onOk={handleData}
            onCancel={callback}
        >
            <Form form={form} layout="vertical">
                <FormItem label="邮箱" field="email">
                    <Input/>
                </FormItem>
                <FormItem label="是否允许邮件通知" field="allowEmail">
                    <Switch defaultChecked={true}/>
                </FormItem>
            </Form>
        </Modal>
    )
}
export default MailEditor;