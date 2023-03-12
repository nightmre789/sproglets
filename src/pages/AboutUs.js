import React from "react";
import FooterOne from "../common/footer/FooterOne";
import SEO from "../common/SEO";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import AboutThree from "../component/about/AboutThree";
import AboutFour from "../component/about/AboutFour";
import TeamOne from "../component/team/TeamOne";
import HeaderTwo from "../common/header/HeaderTwo";

const AboutUs = () => {
   return (
      <>
         <SEO title="About us" />
         <ColorSwitcher />
         <main className="main-wrapper">
            <HeaderTwo />
            <AboutFour />
            <TeamOne />
            <AboutThree />
            <FooterOne parentClass="active-dark-mode bg-color-dark" />
         </main>
      </>
   );
};

export default AboutUs;
