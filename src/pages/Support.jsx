import React, { useEffect } from "react";
import ProfileSidebar from "../components/ProfileSidebar";

const Support = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <ProfileSidebar />
            <div className="col-lg-9 col-md-8 col-sm-12">
              <div className="dashboard-wraper">
                {/* Basic Information */}
                <div className="form-submit">
                  <div className="submit-section">
                    <h4>Support</h4>
                    <hr />
                    <center>
                      <img
                        src="assets/img/support.png"
                        style={{ width: "40%" }}
                      />
                    </center>
                    <div className="col-md-12 text-center">
                      <h4>Are you facing any problem?</h4>
                      <p>
                        If you need instant support then please send a message
                        to reach us quickly. Our support will reply as soon as
                        possible after you send us a message
                      </p>
                    </div>
                    <form>
                      <div className="form-row">
                        <div className="form-group col-md-12">
                          <label>Name</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="John Doe"
                          />
                        </div>
                        <div className="form-group col-md-12">
                          <label>Email</label>
                          <input
                            type="email"
                            className="form-control"
                            defaultValue="johndoe@gmail.com"
                          />
                        </div>
                        <div className="form-group col-md-12">
                          <label>Message</label>
                          <textarea
                            className="form-control"
                            defaultValue={""}
                          />
                        </div>
                        {/*  <div class="form-group col-md-6">*/}
                        {/*	<label>Phone</label>*/}
                        {/*	<input type="text" class="form-control" value="123 456 5847">*/}
                        {/*</div>*/}
                      </div>
                      <div className="form-submit">
                        <div className="submit-section">
                          <div className="form-row">
                            <div className="form-group col-lg-12 col-md-12">
                              <button className="btn btn-theme" type="submit">
                                Send Message
                              </button>
                            </div>
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
      </section>
    </>
  );
};

export default Support;
