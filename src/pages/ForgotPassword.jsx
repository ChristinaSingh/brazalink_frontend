import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    email: "",
  });
  const navigate = useNavigate()

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const getFogetPassword = async () => {
    try {
      if (formData.password !== formData.confirmPassword) {
        setMessage("Passwords do not match!");
        return;
      }
      const res = await axios.post(
        `http://localhost:8000/auth/password-reset`,
        {
          email: formData.email,
          password: formData.password,
        }
      );
      console.log("Response: ", res);
      setMessage("Password reset successful!");
    } catch (error) {
      setMessage(error.response?.data?.message || "An error occurred!");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getFogetPassword();
    navigate("/verify-otp", { state: { email: formData.email } });
  };

  return (
    <>
      <section className="padds">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-10">
              <div className="loving-modern-login">
                <div className="text-center mb-4">
                  <h3>Forgot Password</h3>
                </div>
                <div className="row main_login_form">
                  <div className="login_form_dm">
                    <form
                      id="edd_login_form"
                      className="edd_form"
                      onSubmit={handleSubmit}
                    >
                      <fieldset>
                        <p className="edd-login-username">
                          <label>Email</label>
                          <input
                            className="form-control"
                            type="email"
                            name="email"
                            placeholder="Your Username or Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </p>
                        <p className="edd-login-submit">
                          <input
                            type="submit"
                            className="btn btn-primary radius-50 color-white full-width"
                            value="Reset Password"
                          />
                        </p>
                      </fieldset>
                    </form>
                    {message && <p className="text-center mt-3">{message}</p>}
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
    </>
  );
};

export default ForgotPassword;
