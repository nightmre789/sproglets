import React from "react";
import { Link } from "react-router-dom";
import { slugify } from "../../utils";

const ServiceProp = ({ colSize, serviceStyle, serviceData }) => {
   return (
      <>
         {serviceData.map((data, index) => (
            <div className={colSize} key={index}>
               <div className={`services-grid ${serviceStyle}`}>
                  <div className="thumbnail">
                     <img
                        src={process.env.PUBLIC_URL + data.image}
                        alt="icon"
                     />
                  </div>
                  <div>
                     <h5 className="title">{data.title}</h5>
                     <p>{data.description}</p>
                  </div>
               </div>
            </div>
         ))}
      </>
   );
};

export default ServiceProp;
