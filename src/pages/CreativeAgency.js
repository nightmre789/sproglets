import React, { useState } from "react";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import SEO from "../common/SEO";
import BannerTwo from "../component/banner/BannerTwo";
import BlogOne from "../component/blog/BlogOne";
import BrandOne from "../component/brand/BrandOne";
import CounterUpOne from "../component/counterup/CounterUpOne";
import CtaLayoutOne from "../component/cta/CtaLayoutOne";
import ProjectOne from "../component/project/ProjectOne";
import ServicePropOne from "../component/service/ServicePropOne";
import TestimonialOne from "../component/testimonial/TestimonialOne";
import SectionTitle from "../elements/section-title/SectionTitle";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import ServiceData from "../data/service/about.json";
import BannerThree from "../component/banner/BannerThree";
import FsLightbox from "fslightbox-react";
import HeaderTwo from "../common/header/HeaderTwo";

const CreativeAgency = () => {
   const [toggler, setToggler] = useState(false);
   const [source, setSource] = useState({ yt: "", fb: "" });

   return (
      <>
         <SEO title="Sproglets - School for Special Children (Autism, ADHD, learning disabilities, and other disorders)" />
         <ColorSwitcher />
         <main className="main-wrapper">
            <HeaderTwo />
            <BannerThree />
            <div className="section" style={{ paddingBottom: 70 }}>
               <div className="container">
                  <SectionTitle
                     subtitle="About Sproglets Academy"
                     title="Our mission."
                     description=""
                     textAlignment="heading-left mb--20 mb_md--70"
                     textColor=""
                  />
                  <div className="row">
                     <ServicePropOne
                        colSize="col-lg-4"
                        serviceStyle="service-style-2"
                        itemShow="3"
                        index={3}
                        marginTop="yes"
                        data={ServiceData}
                        hideFindMore
                     />
                  </div>
               </div>
               <ul className="shape-group-7 list-unstyled">
                  <li className="shape shape-1">
                     <img
                        src={
                           process.env.PUBLIC_URL +
                           "/images/others/circle-2.png"
                        }
                        alt="circle"
                     />
                  </li>
                  <li className="shape shape-2">
                     <img
                        src={
                           process.env.PUBLIC_URL +
                           "/images/others/bubble-2.png"
                        }
                        alt="Line"
                     />
                  </li>
                  <li className="shape shape-3">
                     <img
                        src={
                           process.env.PUBLIC_URL +
                           "/images/others/bubble-1.png"
                        }
                        alt="Line"
                     />
                  </li>
               </ul>
            </div>
            <BlogOne
               setToggler={() => setToggler(!toggler)}
               setSource={source => setSource(source)}
               itemShow={2}
            />
            <ProjectOne
               colSize={4}
               itemShow={12}
               parentClass="bg-color-light"
            />
            <FooterOne parentClass="bg-color-light" />
         </main>
         <FsLightbox
            toggler={toggler}
            sources={[
               source.yt == undefined ? (
                  <iframe
                     src={source.fb}
                     width="1280"
                     height="720"
                     style={{ border: "none", overflow: "hidden" }}
                     allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                     allowFullScreen="true"
                  ></iframe>
               ) : (
                  source.yt
               ),
            ]}
         />
      </>
   );
};

export default CreativeAgency;
