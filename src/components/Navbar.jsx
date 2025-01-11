import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("authToken");
    setUser(null);
    navigate("/signin");
  };

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
              <img
                src="assets/img/logo-light.png"
                className="logo hd-992"
                alt=""
              />
              <img src="assets/img/logo.png" className="logo sw-m" alt="" />
            </Link>
          </div>
          <div
            className="nav-menus-wrapper col-lg-4"
            style={{ transitionProperty: "none" }}
          >
            <ul className="nav-menu nav-menu-social align-to-right">
              {/* <!-- <li><a href="#search"><i className="fa fa-search"></i></a></li>--> */}
              {user?.id ? (
                <li className="add-listing bg-whit">
                  <Link to="/login">
                    <i className="fas fa-user-circle"></i> Log Out
                  </Link>
                </li>
              ) : (
                <li className="add-listing bg-whit">
                  <button onClick={handleLogout}>
                    <i className="fas fa-user-circle"></i> Sign In
                  </button>
                </li>
              )}
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
