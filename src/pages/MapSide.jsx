import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapSide = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  const mapContainerStyle = {
    width: "100%",
    height: "400px",
    borderRadius: "25px 25px 0px 0px"
  };

  const center = {
    lat: 40.7128, 
    lng: -74.0060 
  };

  const handleMapLoad = () => {
    setMapLoaded(true);
  };

  useEffect(() => {
  }, [mapLoaded]);

  return (
    <>
      <div id="main-wrapper">
        <section className="pb-2 ppd">
          <div className="container">
            <div className="row justify-content-center mb-3">
              <div className="col-lg-12 col-12">
                <div style={{ position: "relative" }}>
                  <input
                    type="search"
                    id="search-input"
                    className="form-control searchh"
                    placeholder=""
                    style={{ height: 55, borderRadius: 100, paddingLeft: 50 }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      left: 12,
                      top: 16,
                      color: "#01a841",
                    }}
                  >
                    <i className="fa fa-search" />
                  </span>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{
                      borderRadius: 100,
                      position: "absolute",
                      right: 5,
                      top: 5,
                    }}
                  >
                    <span>Go</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-12 tabclass" style={{ maxWidth: "98%" }}>
                <div className="row">
                  <div className="col-lg-6 col-6">
                    <Link
                      to="/"
                      className="btn btn-secondary w-100 tabing  font-res"
                    >
                      <i className="fa fa-building" /> Braza Location
                    </Link>
                  </div>
                  <div className="col-lg-6 col-6">
                    <Link
                      to="/brazamap"
                      className="btn btn-secondary tabing w-100 activee font-res"
                    >
                      <i className="fa fa-map-marker" /> Braza Map
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container home-map-banner full-wrapious">
          <div className="hm-map-container fw-map">
            <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={10}
                onLoad={handleMapLoad}
              >
                <Marker position={center} />
              </GoogleMap>
            </LoadScript>
          </div>
        </div>

        <a id="back2Top" className="top-scroll" title="Back to top" href="#">
          <i className="ti-arrow-up" />
        </a>
      </div>
    </>
  );
};

export default MapSide;
