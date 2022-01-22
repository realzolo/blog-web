import React from "react";
import {Link} from "react-router-dom";
import {Avatar, Badge, Dropdown, Menu} from "@arco-design/web-react";
import {IconDesktop, IconLocation, IconNotification, IconWifi} from "@arco-design/web-react/icon";
import styles from "./style/index.module.scss";
import {useSelector} from "react-redux";
import {ReduxState} from "../../store";

const Header: React.FC = () => {
    const userinfo = useSelector((state: ReduxState) => state.UserReducer.userinfo);
    return (
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <IconDesktop/> <IconWifi/>
            </div>
            <div className={styles.right}>
                <Dropdown trigger='hover'
                          droplist={(
                              <div className={styles.notice_wrapper}>
                                  <h1>温馨提示</h1>
                                  <div className={styles.notice_item_wrapper}>
                                      <svg d="1641805576851" className="icon" viewBox="0 0 1024 1024" version="1.1"
                                           xmlns="http://www.w3.org/2000/svg" p-id="10815" width="35" height="35">
                                          <path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z"
                                                fill="#735FED"
                                                p-id="10816"></path>
                                          <path
                                              d="M452.7 738.7c0 32.7 26.5 59.3 59.3 59.3 32.7 0 59.3-26.5 59.3-59.3 0-32.7-26.5-59.3-59.3-59.3s-59.3 26.6-59.3 59.3zM512 216.1c-119.2 0-215.9 96.6-215.9 215.9v238.6h431.7V432c0-119.2-96.6-215.9-215.8-215.9zM531.5 467l-55.4 96.4c-4.3 7.5-13.8 3.7-13.8-5.5v-57.7c0-5.2-3.4-9.5-7.6-9.5h-24.2c-6.2 0-9.8-8.7-6.2-15l55.4-96.4c4.3-7.5 13.8-3.7 13.8 5.5v57.7c0 5.2 3.4 9.5 7.6 9.5h24.2c6.2 0 9.8 8.7 6.2 15z"
                                              fill="#FFFFFF" opacity=".9" p-id="10817"></path>
                                          <path
                                              d="M477.9 219.1C373.2 235.7 296.1 326 296.1 432v238.6h363.5V432c0-106-77-196.3-181.7-212.9zM531.5 467l-55.4 96.4c-4.3 7.5-13.8 3.7-13.8-5.5v-57.7c0-5.2-3.4-9.5-7.6-9.5h-24.2c-6.2 0-9.8-8.7-6.2-15l55.4-96.4c4.3-7.5 13.8-3.7 13.8 5.5v57.7c0 5.2 3.4 9.5 7.6 9.5h24.2c6.2 0 9.8 8.7 6.2 15z"
                                              fill="#FFFFFF" p-id="10818"></path>
                                          <path
                                              d="M732.1 741.5H291.8c-22.6 0-41.2-18.5-41.2-41.2 0-22.6 18.5-41.2 41.2-41.2h440.3c22.6 0 41.2 18.5 41.2 41.2 0 22.7-18.5 41.2-41.2 41.2z"
                                              fill="#FFFFFF" p-id="10819"></path>
                                      </svg>
                                      <div className={styles.notice_item}>
                                          <Link to="#">
                                              <h3>更新公告</h3>
                                              <span>{new Date().toLocaleString()}</span>
                                          </Link>
                                      </div>
                                  </div>
                              </div>
                          )}
                >
                    <div className={styles.notice}>
                        <Badge dot>
                            <IconNotification style={{color: '#888', fontSize: 18, verticalAlign: -3}}/>
                        </Badge>
                    </div>
                </Dropdown>
                <div className={styles.signature_wrapper}>
                    <span>{userinfo.username}</span>
                    <span>{userinfo.email}</span>
                </div>
                <Dropdown trigger={'click'} droplist={(
                    <Menu>
                        <Menu.Item key='1'>
                            <IconLocation/>
                            Beijing
                        </Menu.Item>
                        <Menu.Item key='2'>
                            <IconLocation/>
                            Shanghai
                        </Menu.Item>
                        <Menu.Item key='3'>
                            <IconLocation/>
                            Guangzhou
                        </Menu.Item>
                    </Menu>
                )}
                >
                    <Avatar>
                        <img src={userinfo.avatar} alt={userinfo.username}/>
                    </Avatar>
                </Dropdown>
            </div>
        </div>
    )
}
export default Header;