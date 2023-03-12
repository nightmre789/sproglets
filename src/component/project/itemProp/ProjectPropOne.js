import React from "react";
import { Link } from "react-router-dom";
import { slugify } from "../../../utils";

const PropOne = ({ projectStyle, portfolio }) => {
   return (
      <>
         <div className={`project-grid ${projectStyle}`}>
            <div className="thumbnail">
               <img src={process.env.PUBLIC_URL + portfolio.image} alt="icon" />
            </div>
         </div>
      </>
   );
};

export default PropOne;
