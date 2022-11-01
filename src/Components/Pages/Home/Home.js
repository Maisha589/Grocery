import React from 'react';
import Hero from '../../Home/Hero/Hero';
import Information from '../../Home/Information/Information';
import RecentProducts from '../../Home/RecentProducts/RecentProducts';

const Home = () => {
    return (
        <div className='container'>
            <Hero></Hero>
            <RecentProducts></RecentProducts>
            <Information></Information>
        </div>
    );
};

export default Home;