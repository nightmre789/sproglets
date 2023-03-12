import React, { useState, useCallback } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
   width: "800px",
   height: "400px",
};

const center = {
   lat: 24.7914721,
   lng: 67.0470599,
};

const BreadCrumbOne = ({ title, description, page }) => {
   const { isLoaded } = useJsApiLoader({
      id: "google-map-script",
      googleMapsApiKey: "AIzaSyBOt7efylhepQDWkiapMheJyg15htE5lbA",
   });

   const [zoom, setZoom] = useState(0);

   const [map, setMap] = useState(null);

   const onLoad = useCallback(function callback(map) {
      // This is just an example of getting and using the map instance!!! don't just blindly copy!
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);

      setMap(map);
      setTimeout(() => setZoom(13), 250);
   }, []);

   const onUnmount = useCallback(function callback(map) {
      setMap(null);
   }, []);

   return (
      <div className="breadcrum-area">
         <div className="container">
            <div className="breadcrumb">
               <h1
                  className="title h2"
                  dangerouslySetInnerHTML={{ __html: title }}
               ></h1>
               <p dangerouslySetInnerHTML={{ __html: description }}></p>

               {isLoaded && (
                  <GoogleMap
                     mapContainerStyle={containerStyle}
                     center={center}
                     zoom={zoom}
                     onLoad={onLoad}
                     onUnmount={onUnmount}
                  >
                     <Marker
                        icon={{
                           scale: 7,
                        }}
                        position={center}
                     />
                     {/* Child components, such as markers, info windows, etc. */}
                  </GoogleMap>
               )}
            </div>
         </div>
         <ul className="shape-group-8 list-unstyled">
            <li className="shape shape-1">
               <img
                  src={process.env.PUBLIC_URL + "/images/others/bubble-9.png"}
                  alt="Bubble"
               />
            </li>
            <li className="shape shape-2">
               <img
                  src={process.env.PUBLIC_URL + "/images/others/bubble-11.png"}
                  alt="Bubble"
               />
            </li>
            <li className="shape shape-3">
               <img
                  src={process.env.PUBLIC_URL + "/images/others/line-4.png"}
                  alt="Line"
               />
            </li>
         </ul>
      </div>
   );
};

export default BreadCrumbOne;
