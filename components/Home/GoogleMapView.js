import { UserLocationContext } from "@/context/UserLocationContext";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import React, { useContext } from "react";

function GoogleMapView() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  });

  const { userLocation, setUserLocation } = useContext(UserLocationContext);

  const containerStyle = {
    width: "100%",
    height: "70vh",
  };
  const coordinate = { lat: -34.397, lng: 150.644 };
  console.log(userLocation);
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
        </GoogleMap>
      )}
    </div>
  );
}

export default GoogleMapView;
