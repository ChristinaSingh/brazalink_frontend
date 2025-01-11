import React from "react";
import { Link } from "react-router-dom";

const Brazapmap = () => {
  return (
    <>
      <div id="main-wrapper">
        <div className="clearfix" />
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
                    <i className="fa fa-search" />{" "}
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
                    {" "}
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
                    <a
                      href="brazamap.html"
                      className="btn btn-secondary tabing w-100 activee font-res"
                    >
                      <i className="fa fa-map-marker" /> Braza Map
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container home-map-banner full-wrapious">
          <div className="hm-map-container fw-map">
            <div id="map" style={{ borderRadius: "25px 25px 0px 0px" }} />
          </div>
        </div>
        <a id="back2Top" className="top-scroll" title="Back to top" href="#">
          <i className="ti-arrow-up" />
        </a>
      </div>
    </>
  );
};

export default Brazapmap;
