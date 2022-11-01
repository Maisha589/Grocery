import React from 'react';
import { Col, Row } from 'antd';

import bgImg1 from "../../../Assets/Images/ad-img1.png"
import bgImg2 from "../../../Assets/Images/ad-img2.png"

const Information = () => {
    return (
        <div className='block informationBlock'>
            <Row gutter={24}>
                <Col md={12}>
                    <div className='holder' style={{
                        backgroundImage: `url(${bgImg1})`,
                        backgroundRepeat: 'no-repeat'
                    }}>
                        <h3>Everyday essentials from</h3>
                        <div className='price'>60p</div>
                    </div>
                </Col>
                <Col md={12}>
                    <div className='holder' style={{
                        backgroundImage: `url(${bgImg2})`,
                        backgroundRepeat: 'no-repeat'
                    }}>
                        <h3>Same day delivery</h3>
                        <p>Free when you spend over £20</p>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Information;