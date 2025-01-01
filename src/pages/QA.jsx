import React from "react";

const QA = () => {
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
        <section>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n\t\t\t\t\t.accordion {\n  background-color: #E3FFEE;\n  color: #000;\n  border:1px solid #E3FFEE;\n  cursor: pointer;\n  padding: 18px;\n  width: 100%;\n  border: none;\n  text-align: left;\n  outline: none;\n  margin-bottom:20px;\n  font-size: 16px;\n  transition: 0.4s;\nfont-weight: 500;\t\t\t\t\t\t\n}\nbutton:focus {\n    outline: 0;\n}\n\n\n.accordion:after {\n  content: '\\002B';\n  color: #777;\n  font-weight: bold;\n  float: right;\n  margin-left: 5px;\n}\n\n.active:after {\n  content: \"\\2212\";\n}\n\n.panel {\n  padding: 0 18px;\n  background-color: white;\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.2s ease-out;\n}\n\t\t\t\t",
            }}
          />
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="sec-heading center">
                  <h3>Q/A </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <button className="accordion">
                  1. Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                  do eiusmod tempor incididunt?
                </button>
                <div className="panel">
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <button className="accordion">
                  2. Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                  do eiusmod tempor incididunt?
                </button>
                <div className="panel">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <button className="accordion">
                  3. Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                  do eiusmod tempor incididunt?
                </button>
                <div className="panel">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <button className="accordion">
                  4. Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                  do eiusmod tempor incididunt?
                </button>
                <div className="panel">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <button className="accordion">
                  5. Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                  do eiusmod tempor incididunt?
                </button>
                <div className="panel">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
            {/* Row */}
          </div>
        </section>
        <a id="back2Top" className="top-scroll" title="Back to top" href="#">
          <i className="ti-arrow-up" />
        </a>
      </div>
    </>
  );
};

export default QA;
