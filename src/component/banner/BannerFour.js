import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import Tilty from "react-tilty";

const BannerFour = () => {
   return (
      <div className="banner banner-style-4">
         <div className="container">
            <div className="banner-content">
               <h1 className="title">About</h1>
               <p>
                  Sproglets Academy Pakistan founded in 2010, located in
                  Karachi, is a special children’s centre. Sproglets provides
                  learning, diagnostic and therapeutic facilities to the
                  children aged 2.5-20 years.
               </p>
               <div>
                  <Link
                     to={process.env.PUBLIC_URL + "/disorders"}
                     className="axil-btn btn-fill-primary btn-large"
                  >
                     Find out more about us
                  </Link>
               </div>
            </div>
            <div className="banner-thumbnail">
               <div className="large-thumb">
                  <Tilty perspective={5000}>
                     <img
                        src={
                           process.env.PUBLIC_URL +
                           "/images/banner/banner-thumb-7.jpg"
                        }
                        alt="Shape"
                     />
                  </Tilty>
               </div>
            </div>
            <div className="banner-social">
               <div className="border-line" />
               <ul className="list-unstyled social-icon">
                  <li>
                     <a href="https://facebook.com/">
                        <FaFacebookF /> Find us on Facebook
                     </a>
                  </li>
               </ul>
            </div>
         </div>
         <ul className="list-unstyled shape-group-19">
            <li className="shape shape-1">
               <img
                  src={process.env.PUBLIC_URL + "/images/others/bubble-29.png"}
                  alt="Bubble"
               />
            </li>
            <li className="shape shape-2">
               <img
                  src={process.env.PUBLIC_URL + "/images/others/line-7.png"}
                  alt="Bubble"
               />
            </li>
         </ul>
      </div>
   );
};

export default BannerFour;
