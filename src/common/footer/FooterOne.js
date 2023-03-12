import React from "react";
import { Link } from "react-router-dom";
import {
   FaFacebookF,
   FaTwitter,
   FaPinterestP,
   FaLinkedin,
   FaInstagram,
   FaVimeoV,
   FaDribbble,
   FaBehance,
   FaEnvelopeOpen,
   FaYoutube,
   FaGlobe,
   FaGlobeAsia,
   FaGlobeAmericas,
} from "react-icons/fa";
import ServiceData from "../../data/service/ServiceMain.json";
import { slugify } from "../../utils";
import { useState } from "react";

const getServiceData = ServiceData;

const FooterOne = ({ parentClass }) => {
   const [msg, setMsg] = useState("");
   return (
      <footer className={`footer-area ${parentClass}`}>
         <div className="container">
            <div className="footer-top">
               <div className="footer-social-link">
                  <ul className="list-unstyled">
                     <li>
                        <a href="https://www.facebook.com/sproglets.academy">
                           <FaFacebookF />
                        </a>
                     </li>
                     <li>
                        <a href="#">
                           <FaLinkedin />
                        </a>
                     </li>
                     <li>
                        <a href="#">
                           <FaInstagram />
                        </a>
                     </li>
                     <li>
                        <a href="https://www.youtube.com/watch?v=tRnGbfNATCs&t=42s">
                           <FaYoutube />
                        </a>
                     </li>
                     <li>
                        <a href="https://sproglets.academy/">
                           <FaGlobeAmericas />
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
            <div className="footer-main">
               <div className="row">
                  <div className="col-xl-6 col-lg-5">
                     <div className="footer-widget border-end">
                        <div className="footer-newsletter">
                           <h2 className="title">Get in touch!</h2>
                           <p>
                              Feel free to reach out to us via e-mail with any
                              inquiries and comments.
                           </p>
                           <form>
                              <div className="input-group">
                                 <span className="mail-icon">
                                    <FaEnvelopeOpen />{" "}
                                 </span>
                                 <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Say Something"
                                    value={msg}
                                    onChange={e => {
                                       setMsg(e.target.value);
                                    }}
                                 />
                                 <button
                                    className="subscribe-btn"
                                    type="submit"
                                    onClick={() => {
                                       window.open(
                                          `mailto:rubinasa@hotmail.com?subject=Sproglets Inquiry&body=${msg}`
                                       );
                                    }}
                                 >
                                    Send
                                 </button>
                              </div>
                           </form>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-6 col-lg-7">
                     <div className="row">
                        <div className="col-sm-5">
                           <div className="footer-widget">
                              <h6 className="widget-title">Services</h6>
                              <div className="footer-menu-link">
                                 <ul className="list-unstyled">
                                    {getServiceData
                                       .slice(0, 5)
                                       .map((data, index) => (
                                          <li key={index}>
                                             <Link
                                                to={
                                                   process.env.PUBLIC_URL +
                                                   `/services#section${data.section}`
                                                }
                                             >
                                                {data.title}
                                             </Link>
                                          </li>
                                       ))}
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <div className="col-sm-4">
                           <div className="footer-widget">
                              <h6 className="widget-title">
                                 Different Disorders
                              </h6>
                              <div className="footer-menu-link">
                                 <ul className="list-unstyled">
                                    <li>
                                       <Link
                                          to={
                                             process.env.PUBLIC_URL +
                                             "/disorders/learning-disabilities"
                                          }
                                       >
                                          Learning Disabilities
                                       </Link>
                                    </li>
                                    <li>
                                       <Link
                                          to={
                                             process.env.PUBLIC_URL +
                                             "/disorders/adhd-attention-deficit-hyperactivity-disorder"
                                          }
                                       >
                                          ADHD
                                       </Link>
                                    </li>
                                    <li>
                                       <Link
                                          to={
                                             process.env.PUBLIC_URL +
                                             "/disorders/behaviour-disorders-emotional-disturbances"
                                          }
                                       >
                                          Behaviour Disorders
                                       </Link>
                                    </li>
                                    <li>
                                       <Link
                                          to={
                                             process.env.PUBLIC_URL +
                                             "/disorders/communication-disorders"
                                          }
                                       >
                                          Communication Disorders
                                       </Link>
                                    </li>
                                    <li>
                                       <Link
                                          to={
                                             process.env.PUBLIC_URL +
                                             "/disorders/autism"
                                          }
                                       >
                                          Autism
                                       </Link>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <div className="col-sm-3">
                           <div className="footer-widget">
                              <h6 className="widget-title">Support</h6>
                              <div className="footer-menu-link">
                                 <ul className="list-unstyled">
                                    <li>
                                       <Link
                                          to={
                                             process.env.PUBLIC_URL +
                                             "/our-clients"
                                          }
                                       >
                                          Videos
                                       </Link>
                                    </li>
                                    <li>
                                       <Link
                                          to={
                                             process.env.PUBLIC_URL + "/contact"
                                          }
                                       >
                                          Contact
                                       </Link>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="footer-bottom">
               <div className="row">
                  <div className="col-md-6">
                     <div className="footer-copyright">
                        <span className="copyright-text">
                           © {new Date().getFullYear()}. All rights reserved by{" "}
                           <a href="https://sproglets.academey/">
                              Sproglets Academy
                           </a>
                           .
                        </span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default FooterOne;
