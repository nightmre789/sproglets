import React, { useState } from "react";
import BlogData from "../../data/blog/BlogData.json";
import Video from "./Video";

const allBlogData = BlogData;

const BlogListOne = ({ colSize, itemShow, setToggler, setSource }) => {
   return (
      <>
         {allBlogData.slice(0, itemShow).map(data => (
            <div className={`${colSize}`} key={data.id}>
               <div
                  className={`blog-list ${
                     data.id % 2 === 0 ? "border-start" : ""
                  }`}
               >
                  <div className="about-expert ">
                     <Video
                        yt={data.youtube}
                        src={data.video}
                        thumb={data.thumb}
                        setToggler={() => setToggler()}
                        setSource={() =>
                           setSource({ yt: data.youtube, fb: data.video })
                        }
                     />
                  </div>
                  <div className="post-content">
                     <h5 className="title">{data.title}</h5>
                     <p>{data.excerpt}</p>
                  </div>
               </div>
            </div>
         ))}
      </>
   );
};

export default BlogListOne;
