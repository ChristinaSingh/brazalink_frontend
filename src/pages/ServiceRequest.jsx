import React from "react";

const ServiceRequest = () => {
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
        {/* ============================================================== */}
        {/* Top header  */}
        {/* ============================================================== */}
        <section>
          <style
            dangerouslySetInnerHTML={{
              __html:
                '\n\t\t\t\t\t.ans{\n  display: none;\n}\n.answer input[type="checkbox"]:checked+label{ background-color: #01a841; color:#fff}\n\n.ans-list {\n    \n    margin: 0px;\n    margin-bottom: 10px;\n    /* width: 50px; */\n    padding:10px;\n    padding-left: 15px;\n    justify-content: left;\n    align-items: center;\n\tborder-radius:10px;\n\tborder:1px solid #eee;\n\tbox-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.08);\n    -webkit-box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.08);\n}\n.ans-list:hover{\n  background-color:#ebfff3;\n  color:black;\n}\nbutton {\n    margin: 25px 0;\n    padding: 15px;\n    display: inline-block;\n}\n\t\t\t\t',
            }}
          />
          <div className="container">
            {/* Row */}
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="sec-heading center">
                  <h3>Service Requests </h3>
                </div>
              </div>
            </div>
            {/* Row */}
          </div>
          <div className="container">
            {/* Row */}
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="sec-heading">
                  <h5>selecting services</h5>
                </div>
                <form>
                  <div className="answer an1">
                    <div className="answer-inner">
                      <input
                        type="checkbox"
                        name="q1"
                        className="ans false"
                        id="ans1"
                      />
                      <label className="ans-list" htmlFor="ans1">
                        <strong>Logo Design</strong> <br />{" "}
                        <span>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </span>
                      </label>
                    </div>
                    <div className="answer-inner">
                      <input
                        type="checkbox"
                        name="q1"
                        className="ans false"
                        id="ans2"
                      />
                      <label className="ans-list" htmlFor="ans2">
                        <strong>Website Creation</strong> <br />{" "}
                        <span>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </span>
                      </label>
                    </div>
                    <div className="answer-inner">
                      <input
                        type="checkbox"
                        name="q1"
                        className="ans false"
                        id="ans3"
                      />
                      <label className="ans-list" htmlFor="ans3">
                        <strong>Mobile App Development</strong> <br />{" "}
                        <span>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </span>
                      </label>
                    </div>
                    <div className="answer-inner">
                      <input
                        type="checkbox"
                        name="q1"
                        className="ans false"
                        id="ans4"
                      />
                      <label className="ans-list" htmlFor="ans4">
                        <strong>Android App Development</strong> <br />{" "}
                        <span>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </span>
                      </label>
                    </div>
                    <div className="answer-inner">
                      <input
                        type="checkbox"
                        name="q1"
                        className="ans false"
                        id="ans5"
                      />
                      <label className="ans-list" htmlFor="ans5">
                        <strong>IOS App Development</strong> <br />{" "}
                        <span>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="form-group mt-2">
                    <label>
                      <strong>Description</strong>
                    </label>
                    <textarea
                      className="form-control"
                      style={{ borderRadius: 10 }}
                      defaultValue={""}
                    />
                  </div>
                  <div className="form-group">
                    <button className="btn btn-theme" type="submit">
                      Send Request
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* Row */}
          </div>
        </section>
        {/* ============================ Footer End ================================== */}
        <a id="back2Top" className="top-scroll" title="Back to top" href="#">
          <i className="ti-arrow-up" />
        </a>
      </div>
    </>
  );
};

export default ServiceRequest;
