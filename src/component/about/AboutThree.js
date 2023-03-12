import React from "react";
import SectionTitle from "../../elements/section-title/SectionTitle";

const Datas = [
   {
      id: 1,
      title: "Autism spectrum disorder",
   },
   {
      id: 2,
      title: "Asperger's syndrome and related Pervasive developmental disorders",
   },
   {
      id: 3,
      title: "Learning disabilities",
   },
   {
      id: 5,
      title: "Speech and language disorder",
   },
   {
      id: 6,
      title: "Attention deficit disorder / Attention deficit hyperactivity disorder",
   },
   {
      id: 7,
      title: "Developmental disabilities and Behaviour difficulties",
   },
];

const AboutThree = () => {
   return (
      <div className="section section-padding bg-color-dark pb--80 pb_lg--40 pb_md--20">
         <div className="container">
            <SectionTitle
               subtitle="Our Strengths"
               title="Why should you work with us?"
               description="Our program is designed to promote students' involvement and active learning. Sproglets' aim is to convert special children into effective citizens."
               textAlignment="heading-left heading-light-left mb--100"
               textColor=""
            />

            <div className="row">
               {Datas.map(data => (
                  <div className="col-lg-4" key={data.id}>
                     <div className="about-quality">
                        <h3 className="sl-number">{data.id}</h3>
                        <h5 className="title">{data.title}</h5>
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

export default AboutThree;
