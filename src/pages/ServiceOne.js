import React from "react";
import FooterOne from "../common/footer/FooterOne";
import BcrumbBannerOne from "../elements/breadcrumb/BcrumbBannerOne";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import SEO from "../common/SEO";
import SectionTitle from "../elements/section-title/SectionTitle";
import ServiceProp from "../component/service/ServiceProp";
import ServiceData from "../data/service/ServiceMain.json";
import { slugify } from "../utils";
import FaqOne from "../component/faq/FaqOne";
import HeaderTwo from "../common/header/HeaderTwo";

const allData = ServiceData;

const ServiceOne = () => {
   const designData = allData.filter(
      data => slugify(data.cate ? data.cate : "") === "school"
   );
   const developmentData = allData.filter(
      data => slugify(data.cate ? data.cate : "") === "individual"
   );
   const marketingData = allData.filter(
      data => slugify(data.cate ? data.cate : "") === "domains"
   );

   const technologyData = allData.filter(
      data => slugify(data.cate ? data.cate : "") === "methods"
   );

   return (
      <>
         <SEO title="Service One" />
         <ColorSwitcher />
         <main className="main-wrapper">
            <HeaderTwo />
            <BcrumbBannerOne title="Our Services" />
            <div className="service-scroll-navigation-area">
               {/* Service Nav */}

               <nav
                  id="onepagenav"
                  className="service-scroll-nav navbar onepagefixed"
               >
                  <div className="container">
                     <ul className="nav nav-pills">
                        <li className="nav-item">
                           <a className="nav-link" href="#section1">
                              Proper School System
                           </a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" href="#section2">
                              Individual Program
                           </a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" href="#section3">
                              Assessment Domains
                           </a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" href="#section4">
                              Methods of Assessment
                           </a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" href="#section5">
                              Instruments
                           </a>
                        </li>
                     </ul>
                  </div>
               </nav>

               <div
                  className="section section-padding"
                  id="section1"
                  style={{ paddingTop: 50, paddingBottom: 50 }}
               >
                  <div className="container">
                     <SectionTitle
                        subtitle="Service"
                        title="Proper School System"
                        description="Sproglets prepares and carry out a set of specific instructional goals for every child in a Special Education Program. The goals are stated as specific skills that the child will be taught to perform. The list of these skills make up what is known as “IEP”."
                        more="The Child's Individualized Educational Program”. The IEP serves as an agreement between the school and the family on the educational goals, because parents know their child best, they play an important role in creating this plan."
                        textAlignment="heading-left"
                        schoolTime
                        textColor=""
                     />
                     <div className="row">
                        <ServiceProp
                           colSize="col-lg-3 col-md-4"
                           serviceStyle="service-style-2"
                           serviceData={designData}
                        />
                     </div>
                  </div>
               </div>

               <div
                  className="section section-padding bg-color-light"
                  style={{ paddingTop: 50, paddingBottom: 50 }}
                  id="section2"
               >
                  <div className="container">
                     <SectionTitle
                        subtitle="Service"
                        title="Individual Program"
                        description="Sproglets' Individual Program is for children going to other schools."
                        textAlignment="heading-left"
                        individualTime
                        textColor=""
                     />
                     <div className="row">
                        <ServiceProp
                           colSize="col-lg-3 col-md-4"
                           serviceStyle="service-style-2"
                           serviceData={developmentData}
                        />
                     </div>
                  </div>
               </div>

               <div
                  className="section section-padding"
                  id="section3"
                  style={{ paddingTop: 50, paddingBottom: 50 }}
               >
                  <div className="container">
                     <SectionTitle
                        subtitle="Assessment Services"
                        title="Assessments Domains"
                        description="Assessment domains may differ as a result of an individual's age, developmental level, diagnosis and areas of need. The domains may include, but are not limited to, the following:"
                        textAlignment="heading-left"
                        textColor=""
                     />
                     <div className="row">
                        <ServiceProp
                           colSize="col-lg-3 col-md-4"
                           serviceStyle="service-style-2"
                           serviceData={marketingData}
                        />
                     </div>
                  </div>
               </div>

               <div
                  className="section section-padding"
                  id="section4"
                  style={{ paddingTop: 0, paddingBottom: 50 }}
               >
                  <div className="container">
                     <SectionTitle
                        title="Methods of Assessment"
                        description="Methods of assessment are individualized based on age, developmental level, diagnosis, and areas of need and may include:"
                        textAlignment="heading-left"
                        textColor=""
                     />
                     <div className="row">
                        <ServiceProp
                           colSize="col-lg-3 col-md-4"
                           serviceStyle="service-style-2"
                           serviceData={technologyData}
                        />
                     </div>
                  </div>
               </div>

               <FaqOne id="section5" />
            </div>
            <FooterOne parentClass="bg-color-light" />
         </main>
      </>
   );
};

export default ServiceOne;
