import axios from "axios";
import React, { useState } from "react";

const Help = () => {
  const [formData, setFormData] = useState({
    content: "",
  });

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));
    console.log("User id here: ", user?.id);

    if (!user?.id) {
      alert("User is not logged in!");
      return;
    }

    const data = {
      content: formData.content,
      createdBy: user?.id,
    };

    try {
      const res = await axios.post(
        "http://localhost:8000/business/help-section/help",
        data
      );
      alert("Help submitted successfully!");
    } catch (error) {
      console.error("Error submitting help:", error);
      alert("Failed to submit help. Please try again.");
    }
  };

  return (
    <>
      <div id="main-wrapper">
        <div className="clearfix" />
        <section>
          <style
            dangerouslySetInnerHTML={{
              __html: `
                .ans{ display: none; }
                .answer input[type="checkbox"]:checked+label{ background-color: #01a841; color:#fff}
                .ans-list { padding: 10px; margin-bottom: 10px; border-radius: 10px; border: 1px solid #eee; }
                .ans-list:hover { background-color:#ebfff3; color:black; }
                button { margin: 25px 0; padding: 15px; display: inline-block; }
              `,
            }}
          />
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="sec-heading center">
                  <h3>Help</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <center>
                  <img src="assets/img/help.png" style={{ marginBottom: 30 }} />
                </center>
                <form onSubmit={handleSubmit}>
                  <div className="form-group mt-2">
                    <label>
                      <strong>How can we help?</strong>
                    </label>
                    <textarea
                      className="form-control"
                      style={{ borderRadius: 10 }}
                      name="content"
                      value={formData.content}
                      onChange={handleChange}
                      placeholder="Type your help request here"
                    />
                  </div>
                  <div className="form-group">
                    <button className="btn btn-theme" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
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

export default Help;
