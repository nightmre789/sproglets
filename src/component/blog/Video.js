import React from "react";
import { FaPlay } from "react-icons/fa";

const Video = ({ thumb, setToggler, setSource }) => {
   return (
      <>
         <div className="thumbnail">
            <img src={process.env.PUBLIC_URL + thumb} alt="Thumbnail" />
            <div className="popup-video">
               <button
                  className="play-btn"
                  onClick={() => {
                     console.log("CLCIKED");
                     setToggler();
                     setSource();
                  }}
               >
                  <FaPlay />
               </button>
            </div>
         </div>
      </>
   );
};

export default Video;
