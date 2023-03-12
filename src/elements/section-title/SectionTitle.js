import React from "react";

const SectionTitle = ({
   subtitle,
   title,
   description,
   more,
   schoolTime,
   individualTime,
   textAlignment,
   textColor,
   titleSize,
}) => {
   return (
      <div className={`section-heading ${textAlignment} ${textColor}`}>
         <div
            className="subtitle"
            dangerouslySetInnerHTML={{ __html: subtitle }}
         ></div>
         <h2
            className="title"
            style={{ fontSize: titleSize }}
            dangerouslySetInnerHTML={{ __html: title }}
         ></h2>
         {schoolTime && (
            <div
               style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 10,
               }}
            >
               <img
                  width={70}
                  height={70}
                  src={
                     process.env.PUBLIC_URL + "/images/icon/icon-calendar.png"
                  }
                  alt="icon"
               />
               <div style={{ marginLeft: 10 }}>
                  <p style={{ width: "100%", marginBottom: 0 }}>
                     Monday to Thursday: 9:50am - 2:00pm
                  </p>
                  <p style={{ width: "100%", marginBottom: 0 }}>
                     Friday: 9:50am - 1:00pm
                  </p>
               </div>
            </div>
         )}
         {individualTime && (
            <div
               style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 10,
               }}
            >
               <img
                  width={70}
                  height={70}
                  src={
                     process.env.PUBLIC_URL + "/images/icon/icon-calendar.png"
                  }
                  alt="icon"
               />
               <div style={{ marginLeft: 10 }}>
                  <p style={{ width: "100%", marginBottom: 0 }}>
                     Monday to Saturday: 4:00pm - 7:00pm
                  </p>
               </div>
            </div>
         )}
         <p dangerouslySetInnerHTML={{ __html: description }}></p>
         <p dangerouslySetInnerHTML={{ __html: more }}></p>
      </div>
   );
};

export default SectionTitle;
