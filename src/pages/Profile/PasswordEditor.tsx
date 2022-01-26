import {Form, Input, Modal} from "@arco-design/web-react";
import React, {useEffect} from "react";
import {IUser} from "../../typings";

const FormItem = Form.Item;

interface IProps {
    visible: boolean,
    callback: () => void,
    data: IUser
}

const PasswordEditor: React.FC<IProps> = ({visible, callback, data}) => {
    const [form] = Form.useForm();
    useEffect(() => {
        form.setFieldsValue({...data});
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
                <FormItem label="用户名" field="username">
                    <Input disabled/>
                </FormItem>
                <FormItem label="密码" field="password">
                    <Input.Password allowClear/>
                </FormItem>
            </Form>
        </Modal>
    )
}
export default PasswordEditor;