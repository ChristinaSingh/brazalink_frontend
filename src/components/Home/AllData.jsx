import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";
import { getBusinessDetails, getLikesIncrease } from "../../utils/authUtils";
import { Link } from "react-router-dom";

const AllData = () => {
  const [data, setData] = useState([]);
  const [displayCount, setDisplayCount] = useState(6);

  // Function to fetch business data
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

  const getLikeUpdate = async () => {
    try {
      const res = await getLikesIncrease();
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

  const handleExploreMore = () => {
    setDisplayCount((prevCount) => prevCount + 3);
  };

  return (
    <section className="pt-2">
      <div className="container">
        <Carousel />
        <div className="row">
          {data?.slice(0, displayCount).map((detail, index) => (
            <div className="col-lg-4 col-md-4 col-sm-12" key={index}>
              <div className="Reveal-grid-wrapper">
                <div className="d-flex">
                  <div className="Reveal-grid-thumb text-center">
                    <Link to={`/details/${detail._id}`}>
                      <img
                        src={
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRguvjEhp-MuHeItJCUPHYDaFzItakjlVnHJhqrlhlghqvMJXEE30qruXk&s" ||
                          detail.step4.logo
                        }
                        alt="Logo"
                        className="img-fluid"
                      />
                    </Link>
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
                          {detail.step1.businessName.length > 15
                            ? `${detail.step1.businessName.substring(0, 15)}...`
                            : detail.step1.businessName}
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
                      <p>{detail.step1.sub_category}</p>
                    </div>
                  </div>
                </div>
                <div className="Reveal-grid-caption-body">
                  <ul className="Reveal-contact-list flex-wrap">
                    <li>
                      <a href={detail.step4.whatsapp_number} target="_blank">
                        <img src="assets/img/whatsapp.png" />
                      </a>
                    </li>
                    <li>
                      <a href={detail.step4.instagram_link} target="_blank">
                        <img src="assets/img/instagram.png" />
                      </a>
                    </li>
                    <li>
                      <a href={detail.step3.website_link} target="_blank">
                        <img src="assets/img/global.png" />
                      </a>
                    </li>

                    <li>
                      <a href="#" target="_blank">
                        <img src="assets/img/calendar.png" />
                      </a>
                    </li>
                    <li>
                      <a href={detail.step3.phone} target="_blank">
                        <img src="assets/img/call.png" />
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <img src="assets/img/location.png" />
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <img src="assets/img/category.png" />
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <img src="assets/img/sms.png" />
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <img src="assets/img/paperclip-2.png" />
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <img src="assets/img/share.png" />
                      </a>
                    </li>
                  </ul>
                  <ul
                    className="Reveal-contact-list flex-wrap"
                    style={{ gap: "12px" }}
                  >
                    <li>
                      <a href="#">
                        <img src="assets/img/icons/Love It.png" /> <br />
                        <span>Love It</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="assets/img/icons/Feedbacks.png" /> <br />
                        <span>feedbacks </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="assets/img/icons/Connect.png"
                          style={{ maxWidth: "32px" }}
                        />
                        <br />
                        <span>Linked </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
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

        {data?.length > displayCount && (
          <div className="row">
            <div className="col-lg-12 col-md-12 text-center">
              <button
                onClick={handleExploreMore}
                className="btn btn-light btn-md rounded"
              >
                Explore More
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllData;
