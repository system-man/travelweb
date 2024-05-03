import React from 'react';
import styles from './Header.module.css';
import logo from '../../assets/logo.svg';
import { Layout, Typography, Input, Menu, Button, Dropdown } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import {
    changeLanguageActionCreator,
    addLanguageActionCreator
} from '../../redux/language/languageActions'

import { useSelector } from '../../redux/hooks'

import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next'

export const Header: React.FC = () => {
    const navigate = useNavigate();
    const { t } = useTranslation(); 
    const dispatch = useDispatch();
    const language = useSelector(state => state.language);
    const languageList = useSelector(state => state.languageList);

    const menuClickHandler = (e) => {
        console.log(e);
        if (e.key === "new") {
            dispatch(addLanguageActionCreator("new_language", "新语言"));
        } else {
            dispatch(changeLanguageActionCreator(e.key))
        }
    }

    return (
        <div className={styles["app-header"]}>
            <div className={styles["top-header"]}>
                <div className={styles.inner}>
                    <Typography.Text>{t("header.slogan")}</Typography.Text>
                    <Dropdown.Button
                            style={{ marginLeft: 15, display: "inline" }}
                            overlay={<Menu onClick={menuClickHandler}
                                items={[...languageList.map(l => {
                                    return { key: l.code, label: l.name }
                                }), { key: "new", label: "添加新语言" }]}
                            />}
                            icon={<GlobalOutlined />}
                        >
                            {language === "zh" ? "中文" : "English"}
                        </Dropdown.Button>

                    <Button.Group className={styles["button-group"]}>
                        <Button onClick={() => navigate("/signIn")}>{t("header.signin")}</Button>
                        <Button onClick={() => navigate("/register")}>{t("header.register")}</Button>
                    </Button.Group>
                </div>
            </div>
            <Layout.Header className={styles["main-header"]}>
                <span onClick={() => navigate("/")}>
                    <img src={logo} alt="" className={styles["App-logo"]}></img>
                    <Typography.Title level={3} className={styles["title"]}>{t("header.title")}</Typography.Title>
                    <Input placeholder={"请输入旅游目的地、主题、或者关键词"} className={styles['search-input']} />
                </span>
            </Layout.Header>
            <Menu mode={"horizontal"} className={styles["main-menu"]}
                items={[
                    { key: "1", label: t("header.home_page") },
                        { key: "2", label: t("header.weekend") },
                        { key: "3", label: t("header.group") },
                        { key: "4", label: t("header.backpack") },
                        { key: "5", label: t("header.private") },
                        { key: "6", label: t("header.cruise") },
                        { key: "7", label: t("header.hotel") },
                        { key: "8", label: t("header.local") },
                        { key: "9", label: t("header.theme") },
                        { key: "10", label: t("header.custom") },
                        { key: "11", label: t("header.study") },
                        { key: "12", label: t("header.visa") },
                        { key: "13", label: t("header.enterprise") },
                        { key: "14", label: t("header.high_end") },
                        { key: "15", label: t("header.outdoor") },
                        { key: "16", label: t("header.insurance") },
                  ]}
            ></Menu>
        </div>
    );
};