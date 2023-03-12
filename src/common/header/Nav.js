import React from "react";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";

const Nav = () => {
   return (
      <nav className="mainmenu-nav">
         <ul className="mainmenu">
            <li>
               <Link to={process.env.PUBLIC_URL + "/about-us"}>About Us</Link>
            </li>
            <li>
               <Link to={process.env.PUBLIC_URL + "/services"}>Services</Link>
            </li>
            <li className="menu-item-has-children">
               <Link to={process.env.PUBLIC_URL + "/disorders"}>
                  Different Disorders <FaAngleDown />
               </Link>
               <ul className="axil-submenu">
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
                     <Link to={process.env.PUBLIC_URL + "/disorders/autism"}>
                        Autism
                     </Link>
                  </li>
               </ul>
            </li>
            <li>
               <Link to={process.env.PUBLIC_URL + "/videos"}>Videos</Link>
            </li>
            <li>
               <Link to={process.env.PUBLIC_URL + "/contact"}>Contact</Link>
            </li>
         </ul>
      </nav>
   );
};

export default Nav;
