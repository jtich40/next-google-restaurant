import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import React from "react";

function GoogleMapView() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  });

  const containerStyle = {
    width: "100%",
    height: "70vh",
  };
  const coordinate = { lat: -34.397, lng: 150.644 };
  return (
    <div>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={coordinate}
          zoom={13}
        ></GoogleMap>
      )}
    </div>
  );
}

export default GoogleMapView;
