import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    password: "",
    phone: "",
  });

  const [errors, setErrors] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data", formData);
    // Basic client-side validation
    const { firstName, lastName, dob, email, password, phone } = formData;
    if (!firstName || !lastName || !email || !password || !phone) {
      setErrors("All required fields must be filled.");
      return;
    }

    try {
      const res = await axios.post(
        `http://localhost:8000/auth/signup`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.status === 201) {
        alert("Signup successful!");
        setFormData({
          firstName: "",
          lastName: "",
          dob: "",
          email: "",
          password: "",
          phone: "",
        });
        setErrors(""); // Clear errors
      }
      navigate("/login");
    } catch (error) {
      console.error("Signup error:", error);
      setErrors(
        error.response?.data?.message || "An error occurred during signup."
      );
    }
  };

  return (
    <>
      <div id="main-wrapper">
        <div className="clearfix" />
        <section className="padds">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-10">
                <div className="loving-modern-login">
                  <div className="text-center mb-4">
                    <h3>Sign Up</h3>
                  </div>
                  <div className="row main_login_form">
                    <div className="login_form_dm">
                      <form
                        id="edd_login_form"
                        className="edd_form"
                        method="post"
                        onSubmit={handleSubmit}
                      >
                        <fieldset>
                          {errors && (
                            <div className="alert alert-danger">{errors}</div>
                          )}
                          <p className="edd-login-username">
                            <label>First Name</label>
                            <input
                              className="form-control"
                              type="text"
                              placeholder="First Name"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleChange}
                            />
                          </p>
                          <p className="edd-login-username">
                            <label>Last Name</label>
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Last Name"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleChange}
                            />
                          </p>
                          <p className="edd-login-username">
                            <label>DOB (Optional)</label>
                            <input
                              className="form-control"
                              type="date"
                              name="dob"
                              value={formData.dob}
                              onChange={handleChange}
                            />
                          </p>
                          <p className="edd-login-username">
                            <label>Phone</label>
                            <input
                              className="form-control"
                              type="number"
                              placeholder="Phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                            />
                          </p>
                          <p className="edd-login-username">
                            <label>Email</label>
                            <input
                              className="form-control"
                              type="email"
                              placeholder="Email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                            />
                          </p>
                          <p className="edd-login-password mb-3">
                            <label>Password</label>
                            <input
                              className="form-control"
                              type="password"
                              placeholder="Password"
                              name="password"
                              value={formData.password}
                              onChange={handleChange}
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
                              I agree to the{" "}
                              <a href="#" style={{ color: "#01a841" }}>
                                Terms of Service
                              </a>{" "}
                              and{" "}
                              <a
                                href="privacy-policy"
                                style={{ color: "#01a841" }}
                              >
                                Privacy Policy
                              </a>
                            </label>
                          </p>
                          <p className="edd-login-submit mb-3">
                            <button
                              type="submit"
                              className="btn btn-primary radius-50 color-white full-width"
                            >
                              Sign Up As User
                            </button>
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
                            <Link to="/signin" className="theme-cl">
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

export default Signup;
