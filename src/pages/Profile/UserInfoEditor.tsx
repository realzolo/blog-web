import React, {useEffect} from "react";
import {Form, Input, Modal} from "@arco-design/web-react";
import {IUser} from "../../typings";

const FormItem = Form.Item;

interface IProps {
    visible: boolean,
    callback: () => void,
    data: IUser
}

const UserInfoEditor: React.FC<IProps> = ({visible, callback, data}) => {
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
            title='Modal Title'
            visible={visible}
            onOk={handleData}
            onCancel={callback}
            autoFocus={false}
            focusLock={true}
        >
            <Form form={form} layout="vertical">
                <FormItem label="用户名" field="username">
                    <Input disabled/>
                </FormItem>
                <FormItem label="昵称" field="nickname">
                    <Input/>
                </FormItem>
                <FormItem label="邮箱" field="email">
                    <Input/>
                </FormItem>
            </Form>
        </Modal>
    )
}
export default UserInfoEditor;