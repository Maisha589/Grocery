import React from 'react';
import { Col, Row, Button } from 'antd';

import img1 from "../../../Assets/Images/img5.jpg"
import img2 from "../../../Assets/Images/img6.jpg"
import img3 from "../../../Assets/Images/img7.jpg"
import img4 from "../../../Assets/Images/img8.jpg"

const products = [
    {
        key: '1',
        image: img1,
        title: 'Glens Vodka 70cl Extra smooth',
        salePrice: '£20.00',
        price: '£15.50'
    },
    {
        key: '2',
        image: img2,
        title: 'Pot Noodle Chicken & Mushroom Standard 90g',
        salePrice: '£1.50',
        price: '£0.90'
    },
    {
        key: '3',
        image: img3,
        title: 'Branston Baked Beans in a Rich and Tasty Tomato Sauce 4 x 410g',
        salePrice: '£2.00',
        price: '£1.50'
    },
    {
        key: '4',
        image: img4,
        title: 'Kelloggs Crunchy Nut Hazelnut & Chocolate Granola 380g',
        salePrice: '£3.00',
        price: '£2.50'
    }
]

const SalesProducts = () => {
    return (
        <div className='block products'>
            <h2>Sale Products</h2>
            <Row gutter={24}>
                {
                    products.map(product => {
                        return <Col lg={6} key={product.key}>
                            <div className='content'>
                                <div className='image'>
                                    <img src={product.image} alt="product" />
                                </div>
                                <h3>{product.title}</h3>
                                <div className='price'>
                                    <span className='salePrice'>{product.salePrice}</span>
                                    {product.price}</div>
                                <Button type="primary">Add to basket</Button>
                            </div>
                        </Col>
                    })
                }

            </Row>
        </div>
    );
};

export default SalesProducts;