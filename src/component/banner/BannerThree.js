import React from "react";
import { Link } from "react-router-dom";
import { AnimationOnScroll } from "react-animation-on-scroll";

const BannerThree = () => {
   return (
      <div className="banner banner-style-3">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-6">
                  <div className="banner-content">
                     <AnimationOnScroll
                        animateIn="slideInUp"
                        duration={1}
                        animateOnce={true}
                        delay={200}
                     >
                        <h1 className="title">Sproglets Academy</h1>
                     </AnimationOnScroll>
                     <AnimationOnScroll
                        animateIn="slideInUp"
                        duration={1}
                        animateOnce={true}
                        delay={100}
                     >
                        <span className="subtitle">
                           Sproglets Academy Pakistan founded in 2010, located
                           in Karachi, is a special children's centre. Sproglets
                           provides learning, diagnostic and therapeutic
                           facilities to the children aged 2.5-20 years.
                        </span>
                     </AnimationOnScroll>
                     <AnimationOnScroll
                        animateIn="slideInUp"
                        duration={1}
                        animateOnce={true}
                        delay={200}
                     >
                        <div className="btn-group">
                           <Link
                              to={process.env.PUBLIC_URL + "/services"}
                              className="axil-btn btn-fill-primary btn-large"
                           >
                              Our Services
                           </Link>
                           <Link
                              to={process.env.PUBLIC_URL + "/about-us"}
                              className="about-btn"
                           >
                              About Us
                           </Link>
                        </div>
                     </AnimationOnScroll>
                  </div>
               </div>
            </div>
         </div>
         <ul className="list-unstyled shape-group-20">
            <li className="shape shape-2">
               <img
                  src={process.env.PUBLIC_URL + "/images/others/bubble-33.png"}
                  alt="Autism, ADHD, Special Needs School Children at Sproglets Event Karachi"
               />
            </li>
            <li className="shape shape-4">
               <img
                  src={process.env.PUBLIC_URL + "/images/others/bubble-14.png"}
                  alt="Disabled Children School"
               />
            </li>
            <li className="shape shape-5">
               <img
                  src={process.env.PUBLIC_URL + "/images/others/bubble-4.png"}
                  alt="Bubble"
               />
            </li>
            <li className="shape shape-6">
               <img
                  src={process.env.PUBLIC_URL + "/images/others/bubble-30.png"}
                  alt="Bubble"
               />
            </li>
            <li className="shape shape-7">
               <img
                  src={process.env.PUBLIC_URL + "/images/others/bubble-31.png"}
                  alt="Bubble"
               />
            </li>
            <li className="shape shape-8 marque-images" />
         </ul>
      </div>
   );
};

export default BannerThree;
