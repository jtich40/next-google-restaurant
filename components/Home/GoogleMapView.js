import { UserLocationContext } from "@/context/UserLocationContext";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import React, { useContext } from "react";
import Markers from "./Markers";

function GoogleMapView({ businessList }) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  });

  const { userLocation, setUserLocation } = useContext(UserLocationContext);

  const containerStyle = {
    width: "100%",
    height: "70vh",
  };

  return (
    <div>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={userLocation}
          zoom={13}
        >
          <MarkerF
            position={userLocation}
            icon={{
              url: "/user-location.png",
              scaledSize: {
                width: 50,
                height: 50,
              },
            }}
          />
          {businessList.map(
            (item, index) =>
              index <= 7 && <Markers business={item} key={index} />
          )}
        </GoogleMap>
      )}
    </div>
  );
}

export default GoogleMapView;
