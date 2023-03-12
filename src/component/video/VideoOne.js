import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import FsLightbox from "fslightbox-react";

const VideoOne = () => {
   const [toggler, setToggler] = useState(false);

   return (
      <>
         <div className="section section-padding-equal bg-color-light">
            <div className="container">
               <div className="about-expert">
                  <div className="thumbnail">
                     <img
                        src={
                           process.env.PUBLIC_URL + "/images/about/about-1.png"
                        }
                        alt="Thumbnail"
                     />
                     <div className="popup-video">
                        <button
                           className="play-btn"
                           onClick={() => setToggler(!toggler)}
                        >
                           <FaPlay />
                        </button>
                     </div>
                  </div>
               </div>
            </div>
            <ul className="shape-group-16 list-unstyled">
               <li className="shape shape-1">
                  <img
                     src={
                        process.env.PUBLIC_URL + "/images/others/circle-2.png"
                     }
                     alt="circle"
                  />
               </li>
               <li className="shape shape-2">
                  <img
                     src={
                        process.env.PUBLIC_URL + "/images/others/bubble-2.png"
                     }
                     alt="Line"
                  />
               </li>
               <li className="shape shape-3">
                  <img
                     src={
                        process.env.PUBLIC_URL + "/images/others/bubble-1.png"
                     }
                     alt="Line"
                  />
               </li>
            </ul>
         </div>
         <FsLightbox
            toggler={toggler}
            sources={[
               <iframe
                  src="https://www.facebook.com/plugins/video.php?height=720&href=https%3A%2F%2Fwww.facebook.com%2Fsproglets.academy%2Fvideos%2F2214882191871450%2F&show_text=false&width=1280&t=0"
                  width="1280"
                  height="720"
                  style={{ border: "none", overflow: "hidden" }}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen="true"
               ></iframe>,
            ]}
         />
      </>
   );
};

export default VideoOne;
