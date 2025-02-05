import React, { useEffect, useState } from "react";
import Banner from "../components/Details Business/Banner";
import { useParams } from "react-router-dom";
import { getBusinessById } from "../utils/authUtils";

const DetailsBusiness = () => {
  const [business, setBusiness] = useState({});
  const googleUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54875.24055089478!2d${business?.longitude}!3d${business?.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fedb2d3da9405%3A0xaecad931f1a39595!2sICICI%20Bank%20Sector%2034%2C%20Chandigarh%20-%20Branch%20%26%20ATM!5e0!3m2!1sen!2sin!4v1611821871299!5m2!1sen!2sin`;

  const { id } = useParams();

  const getBusiness = async () => {
    try {
      const res = await getBusinessById(id);
      setBusiness(res);
    } catch (error) {}
  };

  useEffect(() => {
    getBusiness(id);
  }, []);

  const accordionButtonStyle = {
    backgroundColor: "#01a841",
    color: "#fff",
    border: "1px solid #E3FFEE",
    cursor: "pointer",
    padding: "18px",
    width: "100%",
    border: "none",
    textAlign: "left",
    outline: "none",
    marginBottom: "20px",
    fontSize: "16px",
    transition: "0.4s",
    fontWeight: "bold",
  };

  const panelStyle = {
    padding: "0 18px",
    backgroundColor: "white",
    maxHeight: "0",
    overflow: "hidden",
    transition: "max-height 0.2s ease-out",
  };

  console.log("Business", business);

  return (
    <>
      <Banner business={business} />
      <section className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12">
              <div className="text-center mt-3">
                <ul className="d-flex icondetail">
                  <li>
                    <a href="#">
                      <img src="/assets/img/whatsapp.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/assets/img/instagram.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/assets/img/global.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/assets/img/calendar.png" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img src="/assets/img/call.png" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img src="/assets/img/location.png" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img src="/assets/img/category.png" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img src="/assets/img/sms.png" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img src="/assets/img/paperclip-2.png" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img src="/assets/img/share.png" />
                    </a>
                  </li>
                </ul>
              </div>
              <div style={{ marginTop: 30 }}>
                <button className={accordionButtonStyle}>
                  Business Description
                </button>
                <div className={panelStyle}>
                  <p> {business.description}</p>
                </div>
                <button className="accordion">Location</button>
                <div className="panel">
                  <h5>
                    <i
                      className="lni-map-marker"
                      style={{ color: "#01a841" }}
                    />{" "}
                    Grand Park. New York
                  </h5>
                  <div className="map-container">
                    <iframe
                      src={googleUrl}
                      width="100%"
                      height={400}
                      frameBorder={0}
                      style={{ border: 0 }}
                      allowFullScreen=""
                      aria-hidden="false"
                      tabIndex={0}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="page-sidebar">
                <div className="imp-boxes">
                  <div className="imp-boxes-single">
                    <div className="imp-boxes-single-icon">
                      <img src="/assets/img/phone.svg" width={25} alt="" />
                    </div>
                    <div className="imp-boxes-single-content">
                      {business?.phone || "Contact not found"}
                    </div>
                  </div>
                  <div className="imp-boxes-single">
                    <div className="imp-boxes-single-icon">
                      <img src="/assets/img/mail.svg" width={25} alt="" />
                    </div>
                    <div className="imp-boxes-single-content">
                      {business?.email || "Email not found"}
                    </div>
                  </div>
                </div>
                <div className="Reveal-side-widget">
                  <div className="Reveal-Reveal-side-widget-header dark red">
                    <div className="Reveal-thumb-details">
                      <h4>
                        <i className="fa fa-clock-o" /> Hours
                      </h4>
                    </div>
                    <div className="clearfix" />
                  </div>
                  <div className="Reveal-other-body">
                    <ul className="listing-hour-day">
                      <li>
                        <span className="listing-hour-day">Monday</span>
                        <span className="listing-hour-time">
                          {business?.business_hours_monday_open &&
                          business?.business_hours_monday_close
                            ? `${business.business_hours_monday_open} - ${business.business_hours_monday_close}`
                            : "Close"}
                        </span>
                      </li>
                      <li>
                        <span className="listing-hour-day">Tuesday</span>
                        <span className="listing-hour-time">
                          {business?.business_hours_tuesday_open &&
                          business?.business_hours_tuesday_close
                            ? `${business.business_hours_tuesday_open} - ${business.business_hours_tuesday_close}`
                            : "Close"}
                        </span>
                      </li>
                      <li>
                        <span className="listing-hour-day">Wednesday</span>
                        <span className="listing-hour-time">
                          {business?.business_hours_wednesday_open &&
                          business?.business_hours_wednesday_close
                            ? `${business.business_hours_wednesday_open} - ${business.business_hours_wednesday_close}`
                            : "Close"}
                        </span>
                      </li>
                      <li>
                        <span className="listing-hour-day">Thursday</span>
                        <span className="listing-hour-time">
                          {business?.business_hours_thursday_open &&
                          business?.business_hours_thursday_close
                            ? `${business.business_hours_thursday_open} - ${business.business_hours_thursday_close}`
                            : "Close"}
                        </span>
                      </li>
                      <li>
                        <span className="listing-hour-day">Friday</span>
                        <span className="listing-hour-time">
                          {business?.business_hours_friday_open &&
                          business?.business_hours_friday_close
                            ? `${business.business_hours_friday_open} - ${business.business_hours_friday_close}`
                            : "Close"}
                        </span>
                      </li>
                      <li>
                        <span className="listing-hour-day">Saturday</span>
                        <span className="listing-hour-time">
                          {business?.business_hours_saturday_open &&
                          business?.business_hours_saturday_close
                            ? `${business.business_hours_saturday_open} - ${business.business_hours_saturday_close}`
                            : "Close"}
                        </span>
                      </li>
                      <li>
                        <span className="listing-hour-day">Sunday</span>
                        <span className="listing-hour-time">
                          {business?.business_hours_sunday_open &&
                          business?.business_hours_sunday_close
                            ? `${business.business_hours_sunday_open} - ${business.business_hours_sunday_close}`
                            : "Close"}
                        </span>
                      </li>
                    </ul>
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

export default DetailsBusiness;
