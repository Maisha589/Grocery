import React from 'react';
import Hero from '../../Home/Hero/Hero';
import Information from '../../Home/Information/Information';
import ProductCategories from '../../Home/ProductCat/ProductCategories';
import RecentProducts from '../../Home/RecentProducts/RecentProducts';
import SalesProducts from '../../Home/SalesProducts/SalesProducts';
import TopBrands from '../../Home/TopBrands/TopBrands';

const Home = () => {
    return (
        <div className='container'>
            <Hero></Hero>
            <RecentProducts></RecentProducts>
            <Information></Information>
            <ProductCategories></ProductCategories>
            <SalesProducts></SalesProducts>
            <TopBrands></TopBrands>
        </div>
    );
};

export default Home;