import React from "react";
import PropTypes from "prop-types";

const SEO = ({ title }) => {
   return (
      <>
         <meta charSet="utf-8" />
         <title>{title}</title>
         <meta
            name="description"
            content="Sproglets Academy is a special children's centre and school. Sproglets provides learning, diagnosis, and therapy to children with autism, ADHD, disorders, and learning disability"
         />
         <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
         />
      </>
   );
};
SEO.propTypes = {
   title: PropTypes.string,
};

export default SEO;
