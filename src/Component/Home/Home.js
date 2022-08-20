import React from 'react';
import Banner from '../Banner/Banner';
import Courses from '../Courses/Courses';
import Faqs from '../Faqs/Faqs';
import Features from '../Features/Features';
import Navbar from '../Shared/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <Features/>
            <Courses/>
            <Faqs/>
        </div>
    );
};

export default Home;