import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const VerifyOtp = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const location = useLocation();
  const email = location.state?.email || "";
  const navigate = useNavigate();

  console.log("Email: ", email);

  const handleChange = (element, index) => {
    if (!isNaN(element.value)) {
      const updatedOtp = [...otp];
      updatedOtp[index] = element.value;
      setOtp(updatedOtp);

      if (element.nextSibling) {
        element.nextSibling.focus();
      }
    }
  };

  const getOtpVerify = async () => {
    try {
      const otpString = otp.join("");
      const res = await axios.post(`http://localhost:8000/auth/verify-otp`, {
        email,
        otp: otpString,
      });

      if (res.status === 200 && res.data.status === "success") {
        console.log("OTP verified successfully.");
        navigate("/password-reset", { state: { email } });
      } else {
        alert("OTP verification failed.");
      }
    } catch (error) {
      console.error("Error during OTP verification:", error);
      alert("An error occurred during OTP verification.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.join("").length !== 6) {
      alert("Please enter a valid 6-digit OTP.");
      return;
    }
    getOtpVerify();
  };

  return (
    <>
      <section className="padds">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-10">
              <div className="loving-modern-login">
                <div className="text-center mb-4">
                  <h3>OTP Verification</h3>
                </div>
                <div className="row main_login_form">
                  <div className="login_form_dm">
                    <form
                      id="edd_login_form"
                      className="edd_form"
                      method="post"
                      action="#"
                      onSubmit={handleSubmit}
                    >
                      <div className="otp-container">
                        <div className="otp-input-container">
                          {otp.map((data, index) => (
                            <input
                              key={index}
                              type="text"
                              maxLength={1}
                              className="otp-input"
                              value={data}
                              onChange={(e) => handleChange(e.target, index)}
                              onFocus={(e) => e.target.select()}
                            />
                          ))}
                        </div>
                      </div>
                      <fieldset>
                        <p className="edd-login-submit">
                          <input
                            type="submit"
                            className="btn btn-primary radius-50 color-white full-width"
                            value="Verify"
                          />
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
    </>
  );
};

export default VerifyOtp;
