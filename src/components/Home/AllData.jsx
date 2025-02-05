import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";
import { getBusinessDetails, getLikesIncrease } from "../../utils/authUtils";
import { Link } from "react-router-dom";

const AllData = () => {
  const [data, setData] = useState([]);
  const [displayCount, setDisplayCount] = useState(6);

  const getBusinessData = async () => {
    try {
      const res = await getBusinessDetails();
      setData(res?.data || []);
    } catch (error) {
      console.error("Error fetching business data:", error);
    }
  };

  useEffect(() => {
    getBusinessData();
  }, []);

  const getLikeUpdate = async (id) => {
    try {
      const res = await getLikesIncrease(id);
      console.log("Response:-", res);
    } catch (error) {
      console.error("Error fetching business data:", error);
    }
  };

  const handleExploreMore = () => {
    setDisplayCount((prevCount) => prevCount + 3);
  };

  const handleLike = (detail) => {
    getLikeUpdate(detail.id);
  };

  console.log("Data", data);

  return (
    <section className="pt-2">
      <div className="container">
        <div className="row">
          <div className="owl-carousel owl-theme d-flex" id="categorie-slide">
            <div className="Reveal-cats-box">
              <a href="#" className="Reveal-category-box">
                <div className="category-desc">
                  <div className="category-icon activee">
                    <i className="lni-burger text-white" />
                  </div>
                  <div className="Reveal-category-detail category-desc-text">
                    <h4>Restaurant</h4>
                  </div>
                </div>
              </a>
            </div>
            <div className="Reveal-cats-box">
              <a href="#" className="Reveal-category-box">
                <div className="category-desc">
                  <div className="category-icon">
                    <i className="fas fa-running" />
                  </div>
                  <div className="Reveal-category-detail category-desc-text">
                    <h4>Sports</h4>
                  </div>
                </div>
              </a>
            </div>
            <div className="Reveal-cats-box">
              <a href="#" className="Reveal-category-box">
                <div className="category-desc">
                  <div className="category-icon">
                    <i className="fa fa-shopping-cart" />
                  </div>
                  <div className="Reveal-category-detail category-desc-text">
                    <h4>Shopping</h4>
                  </div>
                </div>
              </a>
            </div>
            <div className="Reveal-cats-box">
              <a href="#" className="Reveal-category-box">
                <div className="category-desc">
                  <div className="category-icon">
                    <i className="fa fa-car" />
                  </div>
                  <div className="Reveal-category-detail category-desc-text">
                    <h4>Cars</h4>
                  </div>
                </div>
              </a>
            </div>
            <div className="Reveal-cats-box">
              <a href="#" className="Reveal-category-box">
                <div className="category-desc">
                  <div className="category-icon">
                    <i className="fa fa-cog" />
                  </div>
                  <div className="Reveal-category-detail category-desc-text">
                    <h4>Services</h4>
                  </div>
                </div>
              </a>
            </div>
            <div className="Reveal-cats-box">
              <a href="#" className="Reveal-category-box">
                <div className="category-desc">
                  <div className="category-icon">
                    <i className="fa fa-home" />
                  </div>
                  <div className="Reveal-category-detail category-desc-text">
                    <h4>Real Estate</h4>
                  </div>
                </div>
              </a>
            </div>
            <div className="Reveal-cats-box">
              <a href="#" className="Reveal-category-box">
                <div className="category-desc">
                  <div className="category-icon">
                    <i className="fa fa-paint-brush" />
                  </div>
                  <div className="Reveal-category-detail category-desc-text">
                    <h4>Art</h4>
                  </div>
                </div>
              </a>
            </div>
            <div className="Reveal-cats-box">
              <a href="#" className="Reveal-category-box">
                <div className="category-desc">
                  <div className="category-icon">
                    <i className="ti-briefcase" />
                  </div>
                  <div className="Reveal-category-detail category-desc-text">
                    <h4>Business</h4>
                  </div>
                </div>
              </a>
            </div>
            <div className="Reveal-cats-box">
              <a href="#" className="Reveal-category-box">
                <div className="category-desc">
                  <div className="category-icon">
                    <i className="ti-ruler-pencil" />
                  </div>
                  <div className="Reveal-category-detail category-desc-text">
                    <h4>Education</h4>
                  </div>
                </div>
              </a>
            </div>
            <div className="Reveal-cats-box">
              <a href="#" className="Reveal-category-box">
                <div className="category-desc">
                  <div className="category-icon">
                    <i className="ti-heart-broken" />
                  </div>
                  <div className="Reveal-category-detail category-desc-text">
                    <h4>Healthcare</h4>
                  </div>
                </div>
              </a>
            </div>
            <div className="Reveal-cats-box">
              <a href="#" className="Reveal-category-box">
                <div className="category-desc">
                  <div className="category-icon">
                    <i className="lni-burger" />
                  </div>
                  <div className="Reveal-category-detail category-desc-text">
                    <h4>Restaurant</h4>
                  </div>
                </div>
              </a>
            </div>
            <div className="Reveal-cats-box">
              <a href="#" className="Reveal-category-box">
                <div className="category-desc">
                  <div className="category-icon">
                    <i className="fa fa-building" />
                  </div>
                  <div className="Reveal-category-detail category-desc-text">
                    <h4>Construction</h4>
                  </div>
                </div>
              </a>
            </div>
            <div className="Reveal-cats-box">
              <a href="category.html" className="Reveal-category-box">
                <div className="category-desc">
                  <div className="category-icon">
                    <i className="fa fa-plus-circle" />
                  </div>
                  <div className="Reveal-category-detail category-desc-text">
                    <h4> Load All</h4>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <Carousel />
        <div className="row">
          {data?.map((detail, index) => (
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
                        <Link to={`/details/${detail.id}`}>
                          {detail.businessName.length > 15
                            ? `${detail.businessName.substring(0, 15)}...`
                            : detail.businessName}
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
                      <p>{detail.sub_category}</p>
                    </div>
                  </div>
                </div>
                <div className="Reveal-grid-caption-body">
                  <ul className="Reveal-contact-list flex-wrap">
                    <li>
                      <a href={detail.whatsapp_number} target="_blank">
                        <img src="assets/img/whatsapp.png" />
                      </a>
                    </li>
                    <li>
                      <a href={detail.instagram_link} target="_blank">
                        <img src="assets/img/instagram.png" />
                      </a>
                    </li>
                    <li>
                      <a href={detail.website_link} target="_blank">
                        <img src="assets/img/global.png" />
                      </a>
                    </li>

                    <li>
                      <a href="#" target="_blank">
                        <img src="assets/img/calendar.png" />
                      </a>
                    </li>
                    <li>
                      <a href={detail.phone} target="_blank">
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
                      <a href="#" onClick={() => handleLike(detail)}>
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
