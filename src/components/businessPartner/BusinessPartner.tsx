import React from 'react';
import style from './BusinessPartner.module.css';

import { Row, Col, Typography, Divider } from 'antd';

import imageMs from './../../assets/images/microsoft-80658_640.png';
import imageFw from './../../assets/images/follow-826033_640.png';
import imageIn from './../../assets/images/icon-720944_640.png';
import imageFb from './../../assets/images/facebook-807588_640.png';

const companies = [
    { src: imageMs, title: "Microsoft" },
    { src: imageFw, title: "Ins" },
    { src: imageIn, title: "Youtube" },
    { src: imageFb, title: "Facebook" }
]

export const BusinessPartner: React.FC = () => {
    return (
        <div className={style.content}>
            <Divider orientation="left">
                <Typography.Title level={3}>合作伙伴</Typography.Title>
            </Divider>
            <Row>
                {
                    companies.map((c, index) => (
                        <Col span={6} key={"bussiness-partner-" + index}>
                            <img 
                                src={c.src} 
                                alt="bussiness-partner"
                                style={{
                                    width: "80%",
                                    display: "block",
                                    marginLeft: "auto",
                                    marginRight: "auto",
                                }} 
                            />
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}
