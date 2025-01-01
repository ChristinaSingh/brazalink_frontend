import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="dark-footer skin-dark-footer">
      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 text-center">
              <ul
                className="text-center footlink"
                style={{
                  gap: "5px",
                  listStyleType: "none",
                  marginLeft: "-25px",
                }}
              >
                <li>
                  <Link to="/service-request">Service Request</Link>
                </li>
                <li>
                  <Link to="/help">Help</Link>
                </li>
                <li>
                  <Link to="/q&a">QA</Link>
                </li>
                <li>
                  <Link to="/privacy-policy">Privacy policy</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-12 text-center mt-2">
              <p className="mb-0" style={{ color: "#fff" }}>
                © 2024 Brazalinks. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
