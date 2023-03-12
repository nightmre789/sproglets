import React from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import TrackVisibility from 'react-on-screen';


const AboutFour = () => {
    return (
            <div className="section section-padding case-study-featured-area">
                <div className="container">
                    <div className="row">
                    <div className="col-xl-7 col-lg-6">
                        <div className="case-study-featured-thumb text-start">
                        <img src={process.env.PUBLIC_URL + "/images/others/about-us.jpg"} alt="Autism & ADHD Special Needs Children" />
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6">
                        <div className="case-study-featured">
                        <div className="section-heading heading-left">
                            <span className="subtitle">About Us</span>
                            <h2 className="title">Sproglets Approach & Methodology</h2>
                            <p><b>Sproglets' methodology is based on the belief that every individual's learning capacity can be enhanced throughout life</b><br /><br />Our methodology states that every human being is capable of change beyond his/her present level of functioning, despite barriers such as age, family and social pressures, the cause of the condition or its severity.
                            <br /><br />
                            Our approach demands a high level of professional/child interaction one-to-one or sometimes even two-to-one and small group work. We believe that no child can make much progress when receiving only one hour a week of any kind of therapy. Our aim is to enhance a child's potential, and enable him/her to move on from such intensive work.</p>
                        </div>
                        <div className="case-study-counterup">
                            <div className="single-counterup">
                            <h2 className="count-number">
                            <TrackVisibility once>
                                {({isVisible}) => (
                                    <span className="number count">
                                        {isVisible ? <CountUp end="13" duration={1} /> : null}
                                    </span>
                                )}  
                            </TrackVisibility>
                            <span className="symbol">+</span>
                            </h2>
                            <span className="counter-title">Years educating special children</span>
                            </div>
                            <div className="single-counterup">
                            <h2 className="count-number">
                            <TrackVisibility once>
                                {({isVisible}) => (
                                    <span className="number count">
                                        {isVisible ? <CountUp end="15" duration={1} /> : null}
                                    </span>
                                )}  
                            </TrackVisibility>
                            </h2>
                            <span className="counter-title">Professional and dedicated staff</span>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutFour;