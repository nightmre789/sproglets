import React from "react";
import SEO from "../common/SEO";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import FooterOne from "../common/footer/FooterOne";
import BreadCrumbOne from "../elements/breadcrumb/BreadCrumbOne";
import HeaderTwo from "../common/header/HeaderTwo";

const Contact = () => {
   return (
      <>
         <SEO title="Contact" />
         <ColorSwitcher />
         <main className="main-wrapper">
            <HeaderTwo />
            <BreadCrumbOne
               title="Contact"
               description="Khayaban-e-Sehar, Phase V, D.H.A. Karachi Pakistan"
               page="Contact"
            />

            <div className="section section-padding" style={{ paddingTop: 0 }}>
               <div className="container">
                  <div className="row">
                     <div className="col-xl-10 col-lg-8 offset-xl-1">
                        <div className="contact-info mb--100 mb_md--30 mt_md--30 mt--50">
                           <h4 className="title">Phone</h4>
                           <p>
                              We will get back to you during standard business
                              hours.
                           </p>
                           <h4 className="phone-number">
                              <a href="tel:03218745677">0321 8745677</a>
                           </h4>
                        </div>
                        <div className="contact-info mb--30">
                           <h4 className="title">Email</h4>
                           <p>
                              We will get back to you during standard business
                              hours.
                           </p>
                           <h4 className="phone-number">
                              <a href="mailto:rubinasa@hotmail.com">
                                 rubinasa@hotmail.com
                              </a>
                           </h4>
                        </div>
                     </div>
                  </div>
               </div>
               <ul className="list-unstyled shape-group-12">
                  <li className="shape shape-1">
                     <img
                        src={
                           process.env.PUBLIC_URL +
                           "/images/others/bubble-2.png"
                        }
                        alt="Bubble"
                     />
                  </li>
                  <li className="shape shape-2">
                     <img
                        src={
                           process.env.PUBLIC_URL +
                           "/images/others/bubble-1.png"
                        }
                        alt="Bubble"
                     />
                  </li>
                  <li className="shape shape-3">
                     <img
                        src={
                           process.env.PUBLIC_URL +
                           "/images/others/circle-3.png"
                        }
                        alt="Circle"
                     />
                  </li>
               </ul>
            </div>
            <FooterOne parentClass="pt--150 pt_lg--100 pt_md--80 pt_sm--60" />
         </main>
      </>
   );
};

export default Contact;
