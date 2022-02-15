import React from 'react';
import '../../App.css';
import { Row, Col } from 'antd';


const items = [
    {
      key: '1',
      icon: <i className="fas fa-chart-pie"></i>,
      title: 'High Performance',
      content: 'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
    },
    {
      key: '2',
      icon: <i className="fas fa-desktop"></i>,
      title: 'Flat Design',
      content: 'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
    },
    {
      key: '3',
      icon: <i className="fas fa-database"></i>,
      title: 'Simplified Workflow',
      content: 'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
    }
]

function AppAbout(){
    return(
        <div className="block aboutBlock">
            <div className="content-fluid">
                <div className="titleHolder">
                    <h3>About Us</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
                </div>
                <div className="contentHolder">
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                        Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                         Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                         Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                    </p>
                </div>

                {/* <Row gutter={[16, 16]}>
                <Col span={8} />
                <Col span={8} />
                <Col span={8} />
                </Row> */}
                <Row gutter={[16, 16]}>
                {items.map(item => {
                    return(
                        <Col span={8} key={items.key}>
                            <div className="content">
                                <div className="icon">
                                    {item.icon}
                                </div>
                                {item.title}
                                {item.content}
                            </div>
                        </Col>
                    );
                })}
                </Row>
            </div>
        </div>
    );
}
export default AppAbout;
