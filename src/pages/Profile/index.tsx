import React, {useState} from "react";
import {Avatar, Grid, Upload} from "@arco-design/web-react";
import {useSelector} from "react-redux";
import {ReduxState} from "../../redux";
import styles from "./index.module.css"
import UserInfoEditor from "./UserInfoEditor";
import PasswordEditor from "./PasswordEditor";
import SocialAccountEditor from "./SocialAccountEditor";
import MailEditor from "./MailEditor";

const Row = Grid.Row;
const Col = Grid.Col;
const Profile: React.FC = () => {
    const userInfo = useSelector((state: ReduxState) => state.UserReducer.userinfo);
    const [v1, setV1] = useState<boolean>(false);
    const [v2, setV2] = useState<boolean>(false);
    const [v3, setV3] = useState<boolean>(false);
    const [v4, setV4] = useState<boolean>(false);
    const [v5, setV5] = useState<boolean>(false);
    const [v6, setV6] = useState<boolean>(false);
    // 修改信息
    const doChangeUserInfo = () => {
        setV1(true);
    }

    // 修改密码
    const doChangeUserPassword = () => {
        setV2(true);
    }

    // 修改社交帐号
    const doChangeSocialAccount = () => {
        setV3(true);
    }

    // 设置邮件提醒
    const setMailReminder = () => {
        setV4(true);
    }
    // 注销账号
    const doCloseAccount = () => {
        setV5(true);
    }
    // 关闭Modal
    const doCloseModal = (mark: string) => {
        console.log(mark)
        switch (mark) {
            case "v1":
                setV1(false);
                break
            case "v2":
                setV2(false);
                break
            case "v3":
                setV3(false);
                break
            case "v4":
                setV4(false);
                break
            case "v5":
                setV5(false);
                break
            case "v6":
                setV6(false);
                break
            default:
                break;
        }
    }
    return (
        <div style={{marginTop: 15}}>
            <Row gutter={15}>
                <Col span={7} className={styles.section_one}>
                    <div className={styles.section_one_content_wrapper}>
                        <img src="https://fyun.cf/theme/cool/assets/images/user-info.jpg" alt=""/>
                        <Upload
                            // action={URL.UPLOAD.USER_AVATAR}
                            accept="image/*"
                            name="avatar"
                            // headers={{Authorization: AuthManager.getToken()}}
                            // maxSize={1 << 10}
                            // onSuccess={onUploadSuccess}
                            // onError={() => Message.error("上传失败")}
                            // onSizeError={() => Message.error("抱歉,限制图片大小为1MB!")}
                            showUploadList={false}
                            // className={styles.section_one_avatar_wrapper}
                        >
                            <Avatar>
                                <img src={userInfo.avatar} alt=""/>
                            </Avatar>
                        </Upload>
                        <h1>{userInfo.nickname}</h1>
                        <span>用户名: {userInfo.username}</span>
                        <span>邮箱: {userInfo.email}</span>
                        {/*<span></span>*/}
                    </div>
                </Col>
                <Col span={8} className={styles.section_two}>
                    <div onClick={doChangeUserInfo}>
                        <h1>个人信息</h1>
                        <span>在这里修改我的个人信息</span>
                    </div>
                    <div onClick={doChangeSocialAccount}>
                        <h1>社交帐号</h1>
                        <span>在这里修改我的社交帐号</span>
                    </div>
                    <div onClick={doChangeUserPassword}>
                        <h1>修改登录密码</h1>
                        <span>定期修改为高强度密码以保护您的账号.</span>
                    </div>
                </Col>
                <Col span={8} className={styles.section_three}>
                    <div onClick={setMailReminder}>
                        <h1>每日邮件提醒设置</h1>
                        <span>当前的设置: ??</span>
                    </div>
                    <div>
                        <h1>二步验证</h1>
                        <span>为您的帐号添加额外的安全保障</span>
                    </div>
                    <div onClick={doCloseAccount}>
                        <h1>注销账号</h1>
                        <span>注销我的账号</span>
                    </div>
                </Col>
            </Row>
            <UserInfoEditor visible={v1} callback={() => doCloseModal("v1")} data={userInfo}/>
            <PasswordEditor visible={v2} callback={() => doCloseModal("v2")} data={userInfo}/>
            <SocialAccountEditor visible={v3} callback={() => doCloseModal("v3")} data={userInfo}/>
            <MailEditor visible={v4} callback={() => doCloseModal("v4")} data={userInfo}/>
        </div>
    )
}
export default Profile;