import React, { useEffect } from "react";
import ProfileSidebar from "../components/ProfileSidebar";

const ChatSupport = () => {
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
                <div className="form-submit">
                  <div className="submit-section">
                    <h4>Chat Support</h4>
                    <hr />
                    <div className="Reveal-dashboard-wrapers">
                      <div className="Reveal-messages-container margin-top-0">
                        <div className="Reveal-messages-headline">
                          <h4>Connor Griffin</h4>
                          <a href="#" className="message-action">
                            <i className="ti-trash" /> Delete Conversation
                          </a>
                        </div>
                        <div className="Reveal-messages-container-inner">
                          <div className="dash-msg-content">
                            <div className="message-plunch">
                              <div className="dash-msg-avatar">
                                <img
                                  src="assets/img/user-1.png"
                                  className="img-fluid avater"
                                  alt=""
                                />
                              </div>
                              <div className="dash-msg-text">
                                <p>
                                  Hello, Contrary to popular belief, Lorem Ipsum
                                  is not simply random text. It has roots in a
                                  piece of classical Latin
                                </p>
                              </div>
                            </div>
                            <div className="message-plunch me">
                              <div className="dash-msg-avatar">
                                <img
                                  src="assets/img/user-2.png"
                                  className="img-fluid avater"
                                  alt=""
                                />
                              </div>
                              <div className="dash-msg-text">
                                <p>
                                  looked up one of the more obscure Latin words,
                                  consectetur, from a Lorem
                                </p>
                              </div>
                            </div>
                            <div className="message-plunch">
                              <div className="dash-msg-avatar">
                                <img
                                  src="assets/img/user-1.png"
                                  className="img-fluid avater"
                                  alt=""
                                />
                              </div>
                              <div className="dash-msg-text">
                                <p>
                                  If you are going to use a passage of Lorem
                                  Ipsum, you need to be sure there isn't
                                  anything embarrassing
                                </p>
                              </div>
                            </div>
                            <div className="message-plunch me">
                              <div className="dash-msg-avatar">
                                <img
                                  src="assets/img/user-2.png"
                                  className="img-fluid avater"
                                  alt=""
                                />
                              </div>
                              <div className="dash-msg-text">
                                <p>
                                  please consider donating a small sum to help
                                  pay for the hosting and bandwidth bill.
                                </p>
                              </div>
                            </div>
                            <div className="message-plunch">
                              <div className="dash-msg-avatar">
                                <img
                                  src="assets/img/user-1.png"
                                  className="img-fluid avater"
                                  alt=""
                                />
                              </div>
                              <div className="dash-msg-text">
                                <p>
                                  Duis aute irure dolor in reprehenderit in
                                  voluptate velit esse cillum dolore
                                </p>
                              </div>
                            </div>
                            <div className="message-plunch me">
                              <div className="dash-msg-avatar">
                                <img
                                  src="assets/img/user-2.png"
                                  className="img-fluid avater"
                                  alt=""
                                />
                              </div>
                              <div className="dash-msg-text">
                                <p>
                                  numquam eius modi tempora incidunt ut labore
                                  et dolore magnam aliquam quaerat voluptatem.
                                </p>
                              </div>
                            </div>
                            <div className="message-plunch">
                              <div className="dash-msg-avatar">
                                <img
                                  src="assets/img/user-1.png"
                                  className="img-fluid avater"
                                  alt=""
                                />
                              </div>
                              <div className="dash-msg-text">
                                <p>
                                  But I must explain to you how all this
                                  mistaken idea of denouncing pleasure
                                </p>
                              </div>
                            </div>
                            {/* Reply Area */}
                            <div className="clearfix" />
                            <div className="message-reply d-flex">
                              <textarea
                                cols={0}
                                rows={0}
                                className="form-control me-2"
                                placeholder="Your Message"
                                style={{ height: 60 }}
                                defaultValue={""}
                              />
                              <button className="btn btn-theme">Send</button>
                            </div>
                          </div>
                          {/* Message Content */}
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
    </>
  );
};

export default ChatSupport;
