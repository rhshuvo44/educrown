import React from 'react';
import aboutImg from '../../img/about/about.jpg';
const About = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-6">
                <h1 className='py-4'>Education is the foundation upon which we build our future.</h1>
                <p>A Google Docs scam that appears to be widespread began landing in users’ inboxes on Wednesday in what seemed to be a sophisticated phishing or malware attack. The deceptive invitation to edit a Google Doc on Google Docs with you.</p>

                </div>
                <div className="col-md-6">
                    <img src={aboutImg} class="img-fluid" alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;