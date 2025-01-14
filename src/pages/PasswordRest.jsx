import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const PasswordRest = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || "";

  console.log("Email", email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/auth/create-new-password",
        {
          email,
          newPassword,
        }
      );
      console.log("Response", response.data);

      if (response.data.message === "Password updated successfully.") {
        setMessage("Password reset successful.");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        setMessage("Password reset failed. Please try again.");
      }
    } catch (error) {
      console.error("Error resetting password:", error);
      setMessage("An error occurred. Please try again later.");
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
                          <label>New Password</label>
                          <input
                            className="form-control"
                            type="password"
                            name="newPassword"
                            placeholder="Enter your new password"
                            required
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                          />
                        </p>
                        <p className="edd-login-username">
                          <label>Confirm Password</label>
                          <input
                            className="form-control"
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm your new password"
                            required
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
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

export default PasswordRest;