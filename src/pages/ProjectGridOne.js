import React from "react";
import FooterOne from "../common/footer/FooterOne";
import BcrumbBannerOne from "../elements/breadcrumb/BcrumbBannerOne";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import SEO from "../common/SEO";
import SectionTitle from "../elements/section-title/SectionTitle";
import ServicePropOne from "../component/service/ServicePropOne";
import ServiceData from "../data/service/disorder.json";
import HeaderTwo from "../common/header/HeaderTwo";

const ProjectGridOne = () => {
   return (
      <>
         <SEO title="Disorders Information" />
         <ColorSwitcher />
         <main className="main-wrapper">
            <HeaderTwo />
            <BcrumbBannerOne title="Different Disorders" styleClass="" />
            <div className="section" style={{ paddingBottom: 70 }}>
               <div className="container">
                  <SectionTitle
                     textAlignment="heading-left mb--20 mb_md--70"
                     textColor=""
                  />
                  <div className="row">
                     <ServicePropOne
                        colSize="col-lg-5"
                        serviceStyle="service-style-2"
                        itemShow="6"
                        index="2"
                        marginTop="yes"
                        data={ServiceData}
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
            <FooterOne parentClass="" />
         </main>
      </>
   );
};

export default ProjectGridOne;
