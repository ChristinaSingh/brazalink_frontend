import React from "react";
import { Link } from "react-router-dom";

const SelectMap = () => {
  return (
    <section className="pb-2 ppd">
      <div className="container">
        <div className="row justify-content-center mb-3">
          <div className="col-lg-12 col-12">
            <div style={{ position: "relative" }}>
              <input
                type="search"
                id="search-input"
                className="form-control searchh"
                placeholder="Good Evening, Rick! what are you looking for today?"
                style={{
                  height: "55px",
                  borderRadius: "100px",
                  paddingLeft: "50px",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  left: "12px",
                  top: "16px",
                  color: "#01a841",
                }}
              >
                <i className="fa fa-search"></i>{" "}
              </span>
              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  borderRadius: "100px",
                  position: "absolute",
                  right: "5px",
                  top: "5px",
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
                <a
                  href="index.html"
                  className="btn btn-secondary w-100 tabing activee font-res"
                >
                  <i className="fa fa-building"></i> Braza Location
                </a>
              </div>
              <div className="col-lg-6 col-6">
                <Link
                  to="/brazamap"
                  className="btn btn-secondary tabing w-100 font-res"
                >
                  <i className="fa fa-map-marker"></i> Braza Map
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectMap;
