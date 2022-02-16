import React from "react";
import '../../App.css';

import image1 from '../../images/great-support.jpg';
import image2 from '../../images/easy-customise.jpg';
import image3 from '../../images/clean-design.jpg';
import image4 from '../../images/unlimited-features.jpg';
import image5 from '../../images/modern-design.jpg';
import image6 from '../../images/advanced-option.jpg';

import { Row, Col } from 'antd';
import { Card } from 'antd';
const { Meta } = Card;


function AppFeatures(){
    return(
        <div className="block featureBlock bgGray">
            <div>
            <Row gutter={[16, 16]}>
                <Col span={8}>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src={image1} />}
                    >
                        <Meta title="Modern Design"/>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src={image2} />}
                    >
                        <Meta title="Modern Design"/>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src={image3} />}
                    >
                        <Meta title="Modern Design"/>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src={image4} />}
                    >
                        <Meta title="Modern Design"/>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src={image5} />}
                    >
                        <Meta title="Modern Design"/>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src={image6} />}
                    >
                        <Meta title="Modern Design"/>
                    </Card>
                </Col>
            </Row>
            </div>
        </div>
    );
}
export default AppFeatures;