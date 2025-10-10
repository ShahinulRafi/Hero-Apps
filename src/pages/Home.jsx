import React from 'react';
import Hero from '../components/Hero/Hero';
import Marketing from '../components/Marketing/Marketing';
import Trending from '../components/Trending/Trending';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Marketing></Marketing>
            <Trending></Trending>
        </div>
    );
};

export default Home;