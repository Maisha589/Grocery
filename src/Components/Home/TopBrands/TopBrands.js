import React from 'react';

import { Col, Row } from 'antd';

import img1 from "../../../Assets/Images/img9.jpg";
import img2 from "../../../Assets/Images/img10.jpg";
import img3 from "../../../Assets/Images/img11.jpg";
import img4 from "../../../Assets/Images/img9.jpg";

const products = [
    {
        key: '1',
        image: img1,
    },
    {
        key: '2',
        image: img2,
    },
    {
        key: '3',
        image: img3,
    },
    {
        key: '4',
        image: img4,
    }
]

const TopBrands = () => {
    return (
        <div className='blocks products'>
            <h2>Top Brands</h2>
            <Row gutter={24}>
                {
                    products.map(product => {
                        return <Col sm={6} key={product.key}>
                            <div className='content'>
                                <div className='image'>
                                    <img src={product.image} alt="Brand" />
                                </div>
                            </div>
                        </Col>
                    })
                }

            </Row>
        </div>
    );
};

export default TopBrands;