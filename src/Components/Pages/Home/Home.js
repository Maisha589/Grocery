import React from 'react';
import Hero from '../../Home/Hero/Hero';
import Information from '../../Home/Information/Information';
import ProductCategories from '../../Home/ProductCat/ProductCategories';
import RecentProducts from '../../Home/RecentProducts/RecentProducts';

const Home = () => {
    return (
        <div className='container'>
            <Hero></Hero>
            <RecentProducts></RecentProducts>
            <Information></Information>
            <ProductCategories></ProductCategories>
        </div>
    );
};

export default Home;