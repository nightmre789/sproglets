import React from "react";
import Accordion from "react-bootstrap/Accordion";
import SectionTitle from "../../elements/section-title/SectionTitle";
import FaqData from "../../data/faq/FaqData.json";

const allData = FaqData;

const FaqOne = ({ id }) => {
   return (
      <div
         className="section section-padding-equal bg-color-light faq-area"
         id={id}
      >
         <div className="container">
            <div className="row">
               <div className="col-lg-5 col-xl-4">
                  <SectionTitle
                     subtitle="Instruments"
                     title="Diagnistic and Assessment Instruments Appropriate for Children With Autistic Spectrum Disorders"
                     description="The instruments listed provide measures of development in different domains of functioning. Rate of change in those domains is sometimes used as a baseline or as a follow-up measure of developmental progress or response to educational programming."
                     textAlignment="heading-left"
                     textColor=""
                     titleSize={24}
                  />
               </div>
               <div className="col-lg-7 col-xl-8">
                  <div className="faq-accordion">
                     <Accordion defaultActiveKey="1">
                        {allData.map(data => (
                           <Accordion.Item eventKey={data.id} key={data.id}>
                              <Accordion.Header>
                                 <span>{`${data.id}.`}</span>
                                 {data.title}
                              </Accordion.Header>
                              <Accordion.Body>
                                 {data.list ? (
                                    data.list.map(item => <p>{item}</p>)
                                 ) : (
                                    <p>{data.body}</p>
                                 )}
                              </Accordion.Body>
                           </Accordion.Item>
                        ))}
                     </Accordion>
                  </div>
               </div>
            </div>
         </div>
         <ul className="shape-group-6 list-unstyled">
            <li className="shape shape-1">
               <img
                  src={process.env.PUBLIC_URL + "/images/others/bubble-7.png"}
                  alt="Bubble"
               />
            </li>
            <li className="shape shape-2">
               <img
                  src={process.env.PUBLIC_URL + "/images/others/line-4.png"}
                  alt="line"
               />
            </li>
            <li className="shape shape-4">
               <img
                  src={process.env.PUBLIC_URL + "/images/others/poses-lady.png"}
                  alt="Poses"
               />
            </li>
         </ul>
      </div>
   );
};

export default FaqOne;
