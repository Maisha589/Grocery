import React from 'react';
import { Col, Row } from 'antd';
import { Carousel } from 'antd';

import img1 from "../../../Assets/Images/banner-img1.jpg";
import img2 from "../../../Assets/Images/banner-img2.jpg";
import img3 from "../../../Assets/Images/banner-img3.jpg";

const Hero = () => {
    return (
        <div className='heroBlock'>
            <Row gutter={24}>
                {/* carousel */}
                <Col lg={18}>
                    <Carousel autoplay>
                        <div>
                            <img src={img1} alt="banner-1" />
                        </div>
                        <div>
                            <img src={img2} alt="banner-2" />
                        </div>
                        <div>
                            <img src={img3} alt="banner-3" />
                        </div>
                    </Carousel>
                </Col>
                {/* information Block */}
                <Col lg={6}>
                    <div className='heroBlocks'>
                        <div className='holder'>
                            <div className='icon'>
                                <i className='fa-solid fa-truck'></i>
                            </div>
                            <div className='content'>
                                <h3>Free Shipping & Return</h3>
                                <p>Free shipping on orders over £20</p>
                            </div>
                        </div>
                        <div className='holder'>
                            <div className='icon'>
                                <i className="fa-solid fa-sack-dollar"></i>
                            </div>
                            <div className='content'>
                                <h3>Money Back Guarantee</h3>
                                <p>100% money back guarantee</p>
                            </div>
                        </div>
                        <div className='holder'>
                            <div className='icon'>
                                <i className="fa-solid fa-headset"></i>
                            </div>
                            <div className='content'>
                                <h3>Online Support 24/7</h3>
                                <p>Excepteur sint occaecat cupidatat</p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Hero;