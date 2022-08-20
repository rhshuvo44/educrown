import React from 'react';
import Banner from '../Banner/Banner';
import Courses from '../Courses/Courses';
import Features from '../Features/Features';

const Home = () => {
    return (
        <div>
            <h1>Navbar</h1>
            <Banner/>
            <Features/>
            <Courses/>
        </div>
    );
};

export default Home;