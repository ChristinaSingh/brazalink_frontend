import React from "react";

const Help = () => {
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
                  <h3>Help </h3>
                </div>
              </div>
            </div>
            {/* Row */}
          </div>
          <div className="container">
            {/* Row */}
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <center>
                  <img src="assets/img/help.png" style={{ marginBottom: 30 }} />
                </center>
                <form>
                  <div className="form-group mt-2">
                    <label>
                      <strong>How can we help?</strong>
                    </label>
                    <textarea
                      className="form-control"
                      style={{ borderRadius: 10 }}
                      defaultValue={" Type Here"}
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

export default Help;
