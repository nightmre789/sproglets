import React from "react";
import { useParams } from "react-router-dom";
import FooterOne from "../common/footer/FooterOne";
import { slugify } from "../utils";
import ServiceData from "../data/service/ServiceMain.json";
import ProjectData from "../data/project/ProjectData.json";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import SEO from "../common/SEO";
import AboutFive from "../component/about/AboutFive";
import HeaderTwo from "../common/header/HeaderTwo";

const allServiceData = ServiceData;
const getProjectData = ProjectData;

const ServiceDetails = () => {
   const params = useParams();
   const serviceSlug = params.slug;

   const getServiceData = allServiceData.filter(
      data => slugify(data.title) === serviceSlug
   );
   const detailsService = getServiceData[0];
   console.log(allServiceData, getServiceData, detailsService, serviceSlug);

   return (
      <>
         <SEO title="Service Details" />
         <ColorSwitcher />
         <main className="main-wrapper">
            <HeaderTwo />

            <AboutFive data={detailsService} />

            <FooterOne parentClass="" />
         </main>
      </>
   );
};

export default ServiceDetails;
