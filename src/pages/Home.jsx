import React from "react";
import SelectMap from "../components/Home/SelectMap";
import AllData from "../components/Home/AllData";

const Home = () => {
  return (
    <>
      {/* <div id="preloader">
        <div className="preloader">
          <span></span>
          <span></span>
        </div>
      </div> */}
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
