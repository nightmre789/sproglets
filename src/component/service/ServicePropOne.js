import React from "react";
import { Link } from "react-router-dom";
import ServiceData from "../../data/service/ServiceMain.json";
import { slugify } from "../../utils";

const ServicePropOne = ({
   index,
   colSize,
   serviceStyle,
   itemShow,
   marginTop,
   hideFindMore,
   data = ServiceData,
}) => {
   const topMargin = i => {
      if (marginTop === "yes") {
         if (i % index === 0) {
            return "mt--0";
         } else if (i % index === 1) {
            return "mt--50 mt_md--0";
         } else {
            return "mt--100 mt_md--0";
         }
      } else {
         return "";
      }
   };

   return (
      <>
         {data.slice(0, itemShow).map((data, index) => (
            <div className={`${colSize} ${topMargin(index)}`} key={index}>
               <div className={`services-grid ${serviceStyle}`}>
                  <div className="thumbnail">
                     <img
                        src={process.env.PUBLIC_URL + data.image}
                        alt="icon"
                     />
                  </div>
                  <div className="content">
                     <h5 className="title">
                        {hideFindMore ? (
                           data.title
                        ) : (
                           <Link
                              to={
                                 process.env.PUBLIC_URL +
                                 `/disorders/${slugify(data.title)}`
                              }
                           >
                              {data.title}
                           </Link>
                        )}
                     </h5>
                     <p>{data.description}</p>
                     {!hideFindMore && (
                        <Link
                           to={
                              process.env.PUBLIC_URL +
                              `/disorders/${slugify(data.title)}`
                           }
                           className="more-btn"
                        >
                           Find out more
                        </Link>
                     )}
                  </div>
               </div>
            </div>
         ))}
      </>
   );
};

export default ServicePropOne;
