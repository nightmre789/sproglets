import React, { useState } from "react";
import FooterOne from "../common/footer/FooterOne";
import SEO from "../common/SEO";
import BcrumbBannerOne from "../elements/breadcrumb/BcrumbBannerOne";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import BlogOne from "../component/blog/BlogOne";
import FsLightbox from "fslightbox-react";
import HeaderTwo from "../common/header/HeaderTwo";

const OurClients = () => {
   const [toggler, setToggler] = useState(false);
   const [source, setSource] = useState({ yt: "", fb: "" });
   return (
      <>
         <SEO title="Videos" />
         <ColorSwitcher />
         <main className="main-wrapper">
            <HeaderTwo />
            <BcrumbBannerOne
               title="Our Videos"
               paragraph="Find our the latest updates on Sproglets and get the answers to your FAQs"
               styleClass="thumbnail-2"
               mainThumb="/images/banner/banner-thumb-2.png"
            />
            <BlogOne
               setToggler={() => setToggler(!toggler)}
               setSource={source => setSource(source)}
               itemShow={6}
               hideText
               parentClass="bg-color-light"
               mt="-60px"
            />

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
            <FooterOne parentClass="bg-color-light" />
         </main>
      </>
   );
};

export default OurClients;
