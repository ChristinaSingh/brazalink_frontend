import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
  });

  const [errors, setErrors] = useState(""); // State for handling errors

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { emailOrPhone, password } = formData;

    if (!emailOrPhone || !password) {
      setErrors("Email and Password are required.");
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:8000/auth/signin`,
        { emailOrPhone, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        const { token, user } = response.data;

        localStorage.setItem("authToken", token);
        localStorage.setItem("user", JSON.stringify(user));

        navigate("/");
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrors(
        error.response?.data?.message || "An error occurred during login."
      );
    }
  };

  return (
    <>
      <section className="padds">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-10">
              <div className="loving-modern-login">
                <div className="text-center mb-4">
                  <h3>Sign In</h3>
                </div>
                <div className="row main_login_form">
                  <div className="login_form_dm">
                    <form
                      //   id="edd_login_form"
                      className="edd_form"
                      onSubmit={handleSubmit}
                    >
                      <fieldset>
                        <p className="edd-login-username">
                          <label>User or Email</label>
                          <input
                            className="form-control"
                            type="text"
                            name="emailOrPhone"
                            placeholder="Your Username or Email"
                            value={formData.emailOrPhone}
                            onChange={handleChange}
                          />
                        </p>
                        <p className="edd-login-password">
                          <label>Password</label>
                          <input
                            className="form-control"
                            type="password"
                            name="password"
                            placeholder="*******"
                            value={formData.password}
                            onChange={handleChange}
                          />
                        </p>
                        {errors && <p style={{ color: "red" }}>{errors}</p>}
                        <p className="edd-login-remember">
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
                            Remember Me
                          </label>
                        </p>
                        <p className="edd-lost-password">
                          <Link to="/forgot-password">Forgot Password?</Link>
                        </p>
                        <p className="edd-login-submit">
                          <button
                            type="submit"
                            className="btn btn-primary radius-50 color-white full-width"
                            defaultValue="Sign In"
                          >
                            Sign In
                          </button>
                        </p>
                        <p className="text-center">
                          Don't have An Account{" "}
                          <Link to="/signup" className="theme-cl">
                            Sign Up
                          </Link>
                        </p>
                        <div className="modal-divider">
                          <span>OR</span>
                        </div>
                        <div
                          className="text-center mb-3"
                          style={{ color: "#01a841", fontWeight: "bold" }}
                        >
                          <span>Sign In With Social Network </span>
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
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
