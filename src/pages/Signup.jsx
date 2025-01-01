import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      {/* <div id="preloader">
    <div className="preloader">
      <span />
      <span />
    </div>
  </div> */}
      <div id="main-wrapper">
        <div className="clearfix" />
        <section className="padds">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-10">
                <div className="loving-modern-login">
                  <div className="text-center mb-4">
                    <h3>Sign Up</h3>
                    <p>Enter your email and password</p>
                  </div>
                  <div className="row main_login_form">
                    <div className="login_form_dm">
                      <form
                        id="edd_login_form"
                        className="edd_form"
                        method="post"
                      >
                        <fieldset>
                          <p className="edd-login-username">
                            <label>First Name</label>
                            <input
                              className="form-control"
                              type="text"
                              placeholder="First Name"
                            />
                          </p>
                          <p className="edd-login-username">
                            <label>Last Name</label>
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Last Name"
                            />
                          </p>
                          <p className="edd-login-username">
                            <label>DOB (Optional)</label>
                            <input
                              className="form-control"
                              type="date"
                              placeholder=""
                            />
                          </p>
                          <p className="edd-login-username">
                            <label>Email</label>
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Email"
                            />
                          </p>
                          <p className="edd-login-password mb-3">
                            <label>Password</label>
                            <input
                              className="form-control"
                              type="password"
                              placeholder="Password"
                            />
                          </p>
                          <p
                            className="edd-login-remember"
                            style={{ width: "100%" }}
                          >
                            <input
                              id="remember"
                              className="checkbox-custom"
                              name="remember"
                              type="checkbox"
                            />
                            <label
                              htmlFor="remember"
                              className="checkbox-custom-label"
                            >
                              {" "}
                              I agree to the{" "}
                              <a href="#" style={{ color: "#01a841" }}>
                                Terms of Service
                              </a>{" "}
                              and
                              <a
                                href="privacy-policy"
                                style={{ color: "#01a841" }}
                              >
                                Privacy Policy
                              </a>
                            </label>
                          </p>
                          <p className="edd-login-submit mb-3">
                            <input
                              type="submit"
                              className="btn btn-primary radius-50 color-white full-width"
                              defaultValue="Sign Up As User"
                            />
                          </p>
                          <div className="modal-divider">
                            <span>OR</span>
                          </div>
                          <p className="edd-login-submit">
                            <Link
                              to="/add-business"
                              className="btn btn-theme-light full-width"
                            >
                              Add Business
                            </Link>
                          </p>
                          <p className="already-login">
                            Have An Account{" "}
                            <a href="signin.html" className="theme-cl">
                              Sign In
                            </a>
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

export default Signup;
