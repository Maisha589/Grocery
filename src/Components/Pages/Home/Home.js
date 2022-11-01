import React from 'react';
import Hero from '../../Home/Hero/Hero';
import RecentProducts from '../../Home/RecentProducts/RecentProducts';

const Home = () => {
    return (
        <div className='container'>
            <Hero></Hero>
            <RecentProducts></RecentProducts>
        </div>
    );
};

export default Home;