import React from 'react';
import { Col, Row, Button } from 'antd';

import img1 from "../../../Assets/Images/img1.jpg"
import img2 from "../../../Assets/Images/img2.jpg"
import img3 from "../../../Assets/Images/img3.jpg"
import img4 from "../../../Assets/Images/img4.jpg"

const products = [
    {
        key: '1',
        image: img1,
        title: 'Fairy Clean & Fresh Washing Up Liquid Pomegranate &amp; Honeysuckle 520 ml',
        price: '£2.00'
    },
    {
        key: '2',
        image: img2,
        title: 'Colgate Triple Action Toothpaste 100ml',
        price: '£1.50'
    },
    {
        key: '3',
        image: img3,
        title: 'Breeze Toilet Tissue Soft White 24 Roll',
        price: '£5.70'
    },
    {
        key: '4',
        image: img4,
        title: 'Comfort intense Fresh Sky Fabric Conditioner Liquid 60 Wash 900 ML',
        price: '£4.50'
    }
]

const RecentProducts = () => {
    return (
        <div className='block products'>
            <h2>Recent Products</h2>
            <Row gutter={24}>
                {
                    products.map(product => {
                        return <Col lg={6} key={product.key}>
                            <div className='content'>
                                <div className='image'>
                                    <img src={product.image} alt="product" />
                                </div>
                                <h3>{product.title}</h3>
                                <div className='price'>{product.price}</div>
                                <Button type="primary">Add to basket</Button>
                            </div>
                        </Col>
                    })
                }

            </Row>
        </div>
    );
};

export default RecentProducts;