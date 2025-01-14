import React from "react";
import ProfileSidebar from "../components/ProfileSidebar";

const ChangeLang = () => {

  return (
    <>
      <div id="main-wrapper">
        <section>
          <div className="container">
            <div className="row">
              <ProfileSidebar />
              <div className="col-lg-9 col-md-8 col-sm-12">
                <div className="dashboard-wraper">
                  {/* Basic Information */}
                  <div className="form-submit">
                    <div className="submit-section">
                      <h4>Change Language</h4>
                      <hr />
                      <form>
                        <div className="form-row">
                          <div className="form-group col-md-12">
                            <label
                              style={{
                                display: "inline-flex",
                                justifyContent: "space-between",
                                width: "100%",
                                background: "#f7f6fa",
                                padding: 10,
                              }}
                            >
                              <span>
                                <img src="assets/img/portg.png" /> Portuguese
                              </span>{" "}
                              <input
                                type="radio"
                                name="radio"
                                style={{ position: "static" }}
                              />{" "}
                            </label>
                          </div>
                          <div className="form-group col-md-12">
                            <label
                              style={{
                                display: "inline-flex",
                                justifyContent: "space-between",
                                width: "100%",
                                background: "#f7f6fa",
                                padding: 10,
                              }}
                            >
                              <span>
                                <img src="assets/img/eng.png" /> English
                              </span>{" "}
                              <input
                                type="radio"
                                name="radio"
                                style={{ position: "static" }}
                              />{" "}
                            </label>
                          </div>
                          {/*  <div class="form-group col-md-6">*/}
                          {/*	<label>Phone</label>*/}
                          {/*	<input type="text" class="form-control" value="123 456 5847">*/}
                          {/*</div>*/}
                        </div>
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

export default ChangeLang;
