import React, { useEffect } from "react";
import SelectMap from "../components/Home/SelectMap";
import AllData from "../components/Home/AllData";

const Home = () => {

  const askForLocationPermission = () => {
    if (window.confirm("Allow this website to access your location?")) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("Location access granted");
          console.log("Latitude: ", position.coords.latitude);
          console.log("Longitude: ", position.coords.longitude);
        },
        (error) => {
          console.error("Error getting location: ", error);
        }
      );
    } else {
      console.log("User denied location access.");
    }
  };
  
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.permissions.query({ name: "geolocation" }).then((permission) => {
        if (permission.state === "prompt") {
          askForLocationPermission();
        }
      });
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  }, []);

  return (
    <>
      <div id="main-wrapper">
        <div className="clearfix"></div>
        <SelectMap />
        <AllData />
        <a id="back2Top" className="top-scroll" title="Back to top" href="#">
          <i className="ti-arrow-up"></i>
        </a>
      </div>
    </>
  );
};

export default Home;
