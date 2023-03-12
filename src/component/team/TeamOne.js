import React from "react";
import { Link } from "react-router-dom";
import TeamData from "../../data/team/TeamData.json";

const allData = TeamData;

const TeamOne = () => {
   return (
      <div
         className="section section-padding bg-color-dark pb--70 pb_lg--20 pb_md--0"
         style={{ paddingBottom: 0 }}
      >
         <div className="container">
            <div className="section-heading heading-light">
               <span className="subtitle">Our Faculty</span>
               <h2 className="title mb--50">Meet The Team</h2>
               <p>
                  Sproglets has a team of special educators, therapists, and
                  psychologists to provide all types of services to special
                  children.
               </p>
            </div>
            <div className="row">
               {allData.map(data => (
                  <div className="col-xl-4 col-sm-6" key={data.id}>
                     <div className="team-grid">
                        <div className="thumbnail">
                           <Link to="#">
                              <img
                                 src={process.env.PUBLIC_URL + data.thumb}
                                 alt={data.title}
                              />
                           </Link>
                        </div>
                        <div className="content">
                           <h4 className="title">{data.title}</h4>
                           <span
                              className="designation"
                              dangerouslySetInnerHTML={{
                                 __html: data.designation,
                              }}
                           ></span>
                           {data.roles &&
                              data.roles.map(role => (
                                 <div
                                    style={{ color: "#fff" }}
                                 >{`- ${role}`}</div>
                              ))}
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
         <ul className="list-unstyled shape-group-10">
            <li className="shape shape-1">
               <img
                  src={process.env.PUBLIC_URL + "/images/others/circle-1.png"}
                  alt="Circle"
               />
            </li>
            <li className="shape shape-2">
               <img
                  src={process.env.PUBLIC_URL + "/images/others/line-3.png"}
                  alt="Circle"
               />
            </li>
            <li className="shape shape-3">
               <img
                  src={process.env.PUBLIC_URL + "/images/others/bubble-5.png"}
                  alt="Circle"
               />
            </li>
         </ul>
      </div>
   );
};

export default TeamOne;
