import React from "react";
import { Link } from "react-router-dom";

const AboutFive = ({ data }) => {
   return (
      <div className="section-padding-equal">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-7">
                  <div className="about-team">
                     <div className="thumbnail">
                        <img
                           src={process.env.PUBLIC_URL + data.thumb}
                           alt="thumbnail"
                        />
                     </div>
                  </div>
               </div>
               <div className="col-lg-5">
                  <div className="about-team">
                     <div className="section-heading heading-left">
                        <span className="subtitle">Different Disorders</span>
                        <h2>{data.title}</h2>
                        <p>{data.description}</p>
                        <p>{data.more}</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AboutFive;
