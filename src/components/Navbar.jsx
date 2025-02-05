import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser?.id) {
      setUser(storedUser);
    }

    const handleOutsideClick = (event) => {
      if (!event.target.closest(".btn-group")) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleProfileClick = () => {
    setDropdownVisible(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("authToken");
    setUser(null);
    navigate("/signin");
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
    console.log("Dropdown visible:", !dropdownVisible);
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
              {user?.id ? (
                <li className="attributes">
                  <div className="btn-group account-drop">
                    <button
                      type="button"
                      className="btn btn-order-by-filt theme-cl"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded={dropdownVisible}
                      onClick={toggleDropdown}
                    >
                      <img
                        src="assets/img/user-1.png"
                        className="avater-img"
                        alt=""
                      />{" "}
                      {user.firstName} {user.lastName}
                    </button>
                    {dropdownVisible && (
                      <div
                        className={`dropdown-menu animated flipInX ${
                          dropdownVisible ? "show" : ""
                        }`}
                        style={{
                          position: "absolute",
                          top: "100%",
                          left: 0,
                          zIndex: 1000,
                        }}
                      >
                        <Link
                          to={`/profile/${user.id}`}
                          className="dropdown-item"
                          onClick={handleProfileClick}
                        >
                          <i className="ti-user" /> Profile
                        </Link>
                        <Link to="#"
                          onClick={handleLogout}
                          className="dropdown-item"
                        >
                          <i className="ti-power-off" /> Logout
                        </Link>
                      </div>
                    )}
                  </div>
                </li>
              ) : (
                <li className="add-listing bg-whit">
                  <Link to={"/login"}>
                    <i className="fas fa-user-circle"></i> Sign In
                  </Link>
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
