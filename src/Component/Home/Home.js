import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Courses from '../Courses/Courses';
import Faqs from '../Faqs/Faqs';
import Features from '../Features/Features';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Features/>
            <Courses/>
            <About/>
            <Faqs/>
        </div>
    );
};

export default Home;