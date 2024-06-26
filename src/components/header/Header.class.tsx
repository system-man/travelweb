import React from 'react';
import styles from './Header.module.css';
import logo from '../../assets/logo.svg';
import { Layout, Typography, Input, Menu, Button, Dropdown } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import { WithRouter, RouteComponentProps } from '../../helpers/withRouter';
import { withTranslation, WithTranslation } from 'react-i18next'
import {
    addLanguageActionCreator,
    changeLanguageActionCreator
} from '../../redux/language/languageActions'

import { RootState } from '../../redux/store'

import { connect } from 'react-redux'
import { Dispatch } from 'redux';

const mapStateToProps = (state: RootState) => {
    return {
        language: state.language,
        languageList: state.languageList
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addLanguage: (name: string, code: string) => {
            const action = addLanguageActionCreator(code, name);
            dispatch(action);
        },
        changeLanguage: (code: "zh" | "en") => {
            const action = changeLanguageActionCreator(code);
            dispatch(action)
        }
    };
};

type PropsType = RouteComponentProps
    & WithTranslation
    & ReturnType<typeof mapStateToProps>
    & ReturnType<typeof mapDispatchToProps>
    ;

class HeaderComponent extends React.Component<PropsType> {

    menuClickHandler = (e) => {
        console.log(e);
        if (e.key === "new") {
            this.props.addLanguage("新语言", "new_language")
        } else {
            this.props.changeLanguage(e.key)
        }
    }

    render(): React.ReactNode {
        const { navigate, t } = this.props;
        return (
            <div className={styles["app-header"]}>
                <div className={styles["top-header"]}>
                    <div className={styles.inner}>
                        <Typography.Text>{t("header.slogan")}</Typography.Text>
                        <Dropdown.Button
                            style={{ marginLeft: 15, display: "inline" }}
                            overlay={<Menu onClick={this.menuClickHandler}
                                items={[...this.props.languageList.map(l => {
                                    return { key: l.code, label: l.name }
                                }), { key: "new", label: "添加新语言" }]}
                            />}
                            icon={<GlobalOutlined />}
                        >
                            {this.props.language === "zh" ? "中文" : "English"}
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
    }
};

export const Header = connect(mapStateToProps, mapDispatchToProps)(withTranslation()(WithRouter(HeaderComponent)))
