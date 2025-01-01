import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="header header-light">
      <div className="container">
        <div
          className="mobile-nav p-2 justify-content-between"
          style={{ display: "none" }}
        >
          <div>
            <Link to="/">
              <img src="assets/img/usa-flag.webp" />
            </Link>
          </div>
          <div>
            <img src="assets/img/logo-light.png" alt="" />
          </div>
          <div className="d-flex pt-2">
            {/* <!-- <li><a href="#search"><i className="fa fa-search"></i></a></li>-->
              <!--<div className="nav-toggle mr-2"><i className="fa fa-bars" style="font-size:24px"></i></div>--> */}
            <div className="nav-toggle" style={{ right: "55px" }}>
              <Link href="/">
                <i
                  className="fas fa-user-circle"
                  style={{ fontSize: "24px", color: "#01ad40" }}
                ></i>
              </Link>
            </div>
          </div>
        </div>
        <nav id="navigation" className="row navigation navigation-landscape">
          <div className="pt-4 col-lg-4">
            <Link to="/">
              <img src="assets/img/usa-flag.webp" />
            </Link>
          </div>
          <div className="nav-header col-lg-4 text-center">
            <Link className="nav-brand" to="/">
              <img src="assets/img/logo-light.png" className="logo hd-992" alt="" />
              <img src="assets/img/logo.png" className="logo sw-m" alt="" />
            </Link>
          </div>
          <div
            className="nav-menus-wrapper col-lg-4"
            style={{ transitionProperty: "none" }}
          >
            <ul className="nav-menu nav-menu-social align-to-right">
              {/* <!-- <li><a href="#search"><i className="fa fa-search"></i></a></li>--> */}

              <li className="add-listing bg-whit">
                <Link to="/signin">
                  <i className="fas fa-user-circle"></i> Sign In
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <div id="search-box">
          <div className="container">
            <a className="close" href="#close"></a>
            <div className="search-main">
              <div className="search-inner">
                <input
                  type="text"
                  id="inputSearch"
                  name="firstname"
                  placeholder=""
                />
                <span className="search-info">
                  Hit enter to search or ESC to close
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
