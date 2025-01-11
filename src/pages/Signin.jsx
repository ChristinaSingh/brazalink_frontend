import React from "react";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <>
      <div id="main-wrapper">
        <div className="clearfix" />
        <section className="padds">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-10">
                <div className="loving-modern-login">
                  <center>
                    <img
                      src="assets/img/logo.png"
                      className="logo sw-m mb-3"
                      alt=""
                    />
                  </center>
                  <div className="text-center mb-4">
                    <h5>Connecting Brazilians Around the World</h5>
                  </div>
                  <div className="text-center mb-3">
                    <h4>Sign In/Sign Up</h4>
                  </div>
                  <div className="row main_login_form">
                    <div className="login_form_dm">
                      <form
                        id="edd_login_form"
                        className="edd_form"
                        method="post"
                        action="#"
                      >
                        <div
                          className="text-center mb-3"
                          style={{ color: "#01a841", fontWeight: "bold" }}
                        >
                          <span>Sing Up With Social Network </span>
                        </div>
                        <div className="social-login mb-5">
                          <ul>
                            <li>
                              <a href="#" className="btn google">
                                <img
                                  src="assets/img/g.png"
                                  style={{ width: 26 }}
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#" className="btn fb">
                                <img
                                  src="assets/img/f.png"
                                  style={{ width: 28 }}
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#" className="btn text-secondary">
                                <img
                                  src="assets/img/ap.png"
                                  style={{ width: 26 }}
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="modal-divider">
                          <span>OR</span>
                        </div>
                        <fieldset>
                          <p className="already-login">
                            <Link
                              to="/signup"
                              className="btn btn-primary radius-50 color-white text-white full-width"
                            >
                              Sing Up With Email
                            </Link>
                          </p>
                          <p className="already-login mb-3">
                            Already have an account
                          </p>
                          <p className="already-login">
                            <Link
                              to="/login"
                              className="btn btn-theme-light full-width"
                            >
                              Sign In
                            </Link>
                          </p>
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <a id="back2Top" className="top-scroll" title="Back to top" href="#">
          <i className="ti-arrow-up" />
        </a>
      </div>
    </>
  );
};

export default Signin;
