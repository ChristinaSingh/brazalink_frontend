import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";
import { getBusinessDetails } from "../../utils/authUtils";
import { Link } from "react-router-dom";

const AllData = () => {
  const [data, setData] = useState([]);

  const getBusinessData = async () => {
    try {
      const res = await getBusinessDetails();
      setData(res);
    } catch (error) {
      console.error("Error fetching business data:", error);
      alert(
        "An error occurred while fetching the business data. Please try again later."
      );
    }
  };

  useEffect(() => {
    getBusinessData();
  }, []);

  console.log("Data:-", data);

  return (
    <section className="pt-2">
      <div className="container">
        <Carousel />
        <div className="row">
          {data.map((detail, index) => (
            <div className="col-lg-4 col-md-4 col-sm-12" key={index}>
              <div className="Reveal-grid-wrapper">
                <div className="d-flex">
                  <div className="Reveal-grid-thumb text-center">
                    <a href="details.html">
                      <img
                        src={
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRguvjEhp-MuHeItJCUPHYDaFzItakjlVnHJhqrlhlghqvMJXEE30qruXk&s" ||
                          detail.logo
                        }
                        alt="Logo"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                  <div className="Reveal-grid-caption">
                    <div
                      className="Reveal-grid-caption-header"
                      style={{ marginLeft: "10px" }}
                    >
                      <h4
                        className="Reveal-header-title d-flex"
                        style={{ justifyContent: "space-between" }}
                      >
                        <Link to={`/details/${detail._id}`}>
                          {detail.name.length > 15
                            ? `${detail.name.substring(0, 15)}...`
                            : detail.name}
                        </Link>{" "}
                        <a
                          href="javascript:void();"
                          style={{ textAlign: "right" }}
                        >
                          <img
                            src="assets/img/chat.png"
                            style={{ width: "32px" }}
                          />
                        </a>
                      </h4>
                      <p>Churrascaria</p>
                    </div>
                  </div>
                </div>
                <div className="Reveal-grid-caption-body">
                  <ul className="Reveal-contact-list flex-wrap">
                    <li>
                      <a href="javascript:void();">
                        <img src="assets/img/whatsapp.png" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void();">
                        <img src="assets/img/instagram.png" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void();">
                        <img src="assets/img/global.png" />
                      </a>
                    </li>

                    <li>
                      <a href="javascript:void();">
                        <img src="assets/img/calendar.png" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void();">
                        <img src="assets/img/call.png" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void();">
                        <img src="assets/img/location.png" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void();">
                        <img src="assets/img/category.png" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void();">
                        <img src="assets/img/sms.png" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void();">
                        <img src="assets/img/paperclip-2.png" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void();">
                        <img src="assets/img/share.png" />
                      </a>
                    </li>
                  </ul>
                  <ul
                    className="Reveal-contact-list flex-wrap"
                    style={{ gap: "12px" }}
                  >
                    <li>
                      <a href="javascript:void();">
                        <img src="assets/img/icons/Love It.png" /> <br />
                        <span>Love It</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void();">
                        <img src="assets/img/icons/Feedbacks.png" /> <br />
                        <span>feedbacks </span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void();">
                        <img
                          src="assets/img/icons/Connect.png"
                          style={{ maxWidth: "32px" }}
                        />
                        <br />
                        <span>Linked </span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void();">
                        <img src="assets/img/icons/Save.png" /> <br />
                        <span>Saved </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <!-- Row --> */}

        {/* <!-- Row --> */}
        <div className="row">
          <div className="col-lg-12 col-md-12 text-center">
            <a href="#" className="btn btn-light btn-md rounded">
              Explore More
            </a>
          </div>
        </div>
        {/* <!-- Row --> */}
      </div>
    </section>
  );
};

export default AllData;
