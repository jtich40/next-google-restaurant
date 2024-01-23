"use client";
import Provider from "./Provider";
import { Raleway } from "next/font/google";
import "./globals.css";
import HeaderNavbar from "@/components/HeaderNavbar";
import { useState, useEffect } from "react";
import { UserLocationContext } from "@/context/UserLocationContext";

const raleway = Raleway({ subsets: ["latin"] });

const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const [userLocation, setUserLocation] = useState([]);

  useEffect(() => {
    getUserLocation();
  }, []);

  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(function (pos) {
      console.log(pos);
      setUserLocation({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      });
    });
  };
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Provider>
          <UserLocationContext.Provider
            value={{ userLocation, setUserLocation }}
          >
            <HeaderNavbar />
            {children}
          </UserLocationContext.Provider>
        </Provider>
      </body>
    </html>
  );
}
