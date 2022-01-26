import React, {PropsWithChildren, useState} from "react";
import {useDispatch} from "react-redux";
import {Button, Card, Form, Input, Message} from "@arco-design/web-react";
import {login} from "../../net/fake";
import {IResponse, IUserState, UserActionType} from "../../typings";
import {HTTPStatusCode} from "../../constant/status-code";
import styles from "./style/index.module.scss";
import {useNavigate} from "react-router-dom";

const FormItem = Form.Item;

const Login: React.FC<PropsWithChildren<any>> = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const doSubmit = async () => {
        const {username, password} = form.getFieldsValue();
        setLoading(true);
        const result: IResponse = await doLogin(username, password);
        if (!result) {
            Message.error("网络错误!");
            setLoading(false);
            return;
        }
        const {code, data} = result;
        setLoading(false);
        switch (code) {
            case HTTPStatusCode.SUCCESS:
                dispatch({type: UserActionType.ADD_USER, payload: data as IUserState})
                Message.success("登录成功!");
                navigate("/dashboard", {replace: true});
                break;
            case HTTPStatusCode.FAILURE:
                Message.error("登录失败! 用户名或密码错误!");
                break;
            default:
                break;
        }
    }
    /**
     * response 不为null: 网络请求成功(存在data)  若为null: 网络请求失败(此处返回null表示没有response,net err在响应拦截器处理)
     * @param username 用户名
     * @param password 密码
     */
    const doLogin = async (username: string, password: string): Promise<IResponse> => {
        const response: IResponse = await login(username, password);
        return response ? response.data : null;
    }

    return (
        <div className={styles.wrapper}>
            <Card>
                <Form form={form} style={{width: 320}} wrapperCol={{span: 24}} onSubmit={doSubmit}>
                    <FormItem field='username'>
                        <Input/>
                    </FormItem>
                    <FormItem field='password'>
                        <Input/>
                    </FormItem>
                    <FormItem>
                        <Button type='primary' htmlType='submit' long loading={loading}>
                            Login
                        </Button>
                    </FormItem>
                </Form>
            </Card>
        </div>
    )
}
export default Login;