import React from "react";

const AddBusiness = () => {
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
        <section className="padds" style={{ paddingBottom: 370 }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 col-md-10">
                <div className="loving-modern-login">
                  <div className="row main_login_form">
                    <div className="login_form_dm">
                      <div className="multisteps-form">
                        <div className="row">
                          <div className="col-12 col-lg-12 ml-auto mr-auto mb-4">
                            <div className="multisteps-form__progress">
                              <button
                                className="multisteps-form__progress-btn js-active"
                                type="button"
                                title="Step1"
                              >
                                Step1
                              </button>
                              <button
                                className="multisteps-form__progress-btn"
                                type="button"
                                title="Step2"
                              >
                                Step2
                              </button>
                              <button
                                className="multisteps-form__progress-btn"
                                type="button"
                                title="Step3"
                              >
                                Step3
                              </button>
                              <button
                                className="multisteps-form__progress-btn"
                                type="button"
                                title="step4"
                              >
                                Step4
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12 col-lg-12">
                            <style
                              dangerouslySetInnerHTML={{
                                __html:
                                  "\n\t\t\t\t ::placeholder {\n  color: #ADA4A5 !important;\n   /* Firefox */\n}\n.form-control{\n\t color: #ADA4A5 !important;\n\t }\n\t\t\t\t label{\n\t\t\t\t\t color:#090909 !important;\n\t\t\t\t\t font-weight:600;\n\t\t\t\t }\n\t\t\t\t .question {\n    \n    top: 44px;\n  }\n\t\t\t  ",
                              }}
                            />
                            <form className="multisteps-form__form">
                              <div
                                className="multisteps-form__panel shadow  rounded bg-white js-active"
                                data-animation="fade"
                              >
                                <div className="text-center mb-4">
                                  <h3>Businesses Information</h3>
                                </div>
                                <div className="multisteps-form__content">
                                  <div className="form-group">
                                    <label>
                                      Business Name{" "}
                                      <span style={{ color: "red" }}>*</span>
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Enter Your Business name"
                                    />
                                  </div>
                                  <div className="form-group">
                                    <label>Business Description</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Use Key words to describe your business"
                                    />
                                  </div>
                                  <div
                                    className="form-group"
                                    style={{ position: "relative" }}
                                  >
                                    <label>
                                      Business Category{" "}
                                      <span style={{ color: "red" }}>*</span>
                                    </label>
                                    <select className="form-control">
                                      <option>Select Your Business Type</option>
                                      <option>Category1</option>
                                      <option>Category2</option>
                                      <option>Category3</option>
                                    </select>
                                    {/*<span className="question"><img src="assets/img/category.png"/></span> */}
                                  </div>
                                  <div
                                    className="form-group"
                                    style={{ position: "relative" }}
                                  >
                                    <label>
                                      Business Sub Category{" "}
                                      <span style={{ color: "red" }}>*</span>
                                    </label>
                                    <select className="form-control">
                                      <option>
                                        Select A Specific Sub Category
                                      </option>
                                      <option>Sub Category1</option>
                                      <option>Sub Category2</option>
                                      <option>Sub Category3</option>
                                    </select>
                                    {/*<span className="question"><img src="assets/img/category.png"/></span> */}
                                  </div>
                                  <div
                                    className="button-row d-flex"
                                    style={{ marginTop: 50, marginBottom: 70 }}
                                  >
                                    <button
                                      className="btn btn-primary radius-50 text-white color-white full-width js-btn-next"
                                      type="button"
                                      title="Next"
                                    >
                                      Next
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="multisteps-form__panel shadow rounded bg-white"
                                data-animation="fade"
                              >
                                <div className="text-center mb-4">
                                  <h3>Businesses Location</h3>
                                </div>
                                <div className="multisteps-form__content">
                                  <div className="form-group">
                                    <label>Street (optional)</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Enter Street Address"
                                    />
                                  </div>
                                  <div className="form-group">
                                    <label>Apartment, Suite (optional)</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Apartment"
                                    />
                                  </div>
                                  <div className="form-group">
                                    <label>
                                      Zip Code{" "}
                                      <span style={{ color: "red" }}>*</span>
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Zip code"
                                    />
                                  </div>
                                  <div className="form-group">
                                    <label>
                                      State{" "}
                                      <span style={{ color: "red" }}>*</span>
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="State"
                                    />
                                  </div>
                                  <div
                                    className="button-row d-flex"
                                    style={{ marginTop: 50, marginBottom: 70 }}
                                  >
                                    <button
                                      className="btn btn-primary radius-50 text-white color-white full-width js-btn-next"
                                      type="button"
                                      title="Next"
                                    >
                                      Next
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="multisteps-form__panel shadow  rounded bg-white"
                                data-animation="fade"
                              >
                                <div className="text-center mb-4">
                                  <h3>Businesses Contact Info</h3>
                                </div>
                                <div className="multisteps-form__content">
                                  <div
                                    className="form-group"
                                    style={{ position: "relative" }}
                                  >
                                    <label>Phone</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Contact Number"
                                    />
                                    {/*<span className="question"><img src="assets/img/call.png"/></span> */}
                                  </div>
                                  <div
                                    className="form-group"
                                    style={{ position: "relative" }}
                                  >
                                    <label>Email (Same as User Email)</label>
                                    <input
                                      type="email"
                                      className="form-control"
                                      placeholder="Business Email"
                                    />
                                    {/* <span className="question"><img src="assets/img/sms.png"/></span>  */}
                                  </div>
                                  <div className="form-group">
                                    <label>Apartment, Suite (optional)</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Apartment"
                                    />
                                  </div>
                                  <div className="form-group">
                                    <label>Website</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Website Url"
                                    />
                                  </div>
                                  <div className="form-group">
                                    <label>Business Hours</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Business Hours"
                                    />
                                  </div>
                                  <div
                                    className="button-row d-flex"
                                    style={{ marginTop: 50, marginBottom: 70 }}
                                  >
                                    <button
                                      className="btn btn-primary radius-50 text-white color-white full-width js-btn-next"
                                      type="button"
                                      title="Next"
                                    >
                                      Next
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="multisteps-form__panel shadow rounded bg-white"
                                data-animation="fade"
                              >
                                <div className="text-center mb-4">
                                  <h3>Businesses Links</h3>
                                </div>
                                <div className="multisteps-form__content">
                                  <div
                                    className="form-group"
                                    style={{ position: "relative" }}
                                  >
                                    <label>Ordering Link</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Enter your Website order link"
                                    />
                                    {/* <span className="question"><img src="assets/img/website.svg"/></span>*/}
                                  </div>
                                  <div
                                    className="form-group"
                                    style={{ position: "relative" }}
                                  >
                                    <label>Booking Link</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Enter your Booking link"
                                    />
                                    <span className="question">
                                      <img src="assets/img/website.svg" />
                                    </span>
                                  </div>
                                  <div
                                    className="form-group"
                                    style={{ position: "relative" }}
                                  >
                                    <label>
                                      WhatsApp (Same as phone number){" "}
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Enter your Number"
                                    />
                                    <span className="question">
                                      <img src="assets/img/whatsapp.png" />
                                    </span>
                                  </div>
                                  <div
                                    className="form-group"
                                    style={{ position: "relative" }}
                                  >
                                    <label>Instagram</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Enter your Instagram Link"
                                    />
                                    <span className="question">
                                      <img src="assets/img/instagram.png" />
                                    </span>
                                  </div>
                                  <div
                                    className="form-group"
                                    style={{ position: "relative" }}
                                  >
                                    <label>Facebook</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Enter your Facebook Link"
                                    />
                                    <span className="question">
                                      <img src="assets/img/facebook.png" />
                                    </span>
                                  </div>
                                  <div
                                    className="form-group"
                                    style={{ position: "relative" }}
                                  >
                                    <label>X</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Enter your X Link"
                                    />
                                    <span className="question">
                                      <img src="assets/img/x.png" />
                                    </span>
                                  </div>
                                  <h4>Logo</h4>
                                  <div className="form-group text-center">
                                    <label className="upload">
                                      {" "}
                                      <span>
                                        <i className="fa fa-plus" />
                                      </span>
                                      <input
                                        type="file"
                                        className="form-control"
                                        style={{ display: "none" }}
                                      />
                                    </label>
                                  </div>
                                  <h4>Background Image</h4>
                                  <div
                                    className="form-group text-center"
                                    style={{
                                      background: "#f4f4f4",
                                      borderRadius: 10,
                                      border: "2px dashed #01a841",
                                    }}
                                  >
                                    <label
                                      style={{
                                        backgroundImage:
                                          "url(https://removal.ai/wp-content/uploads/2021/02/no-img.png)",
                                        width: "100%",
                                        height: 100,
                                        paddingTop: 35,
                                        borderRadius: 10,
                                        backgroundSize: "contain",
                                        backgroundRepeat: "no-repeat",
                                        backgroundPosition: "center",
                                      }}
                                    >
                                      {" "}
                                      <span>
                                        <i className="fa fa-plus" />
                                      </span>
                                      <input
                                        type="file"
                                        className="form-control"
                                        style={{ display: "none" }}
                                      />
                                    </label>
                                  </div>
                                  <div className="button-row  mt-4">
                                    <button
                                      className="btn btn-primary radius-50 text-white color-white full-width mb-3"
                                      type="button"
                                      title="Send"
                                    >
                                      Submit
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
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

export default AddBusiness;
