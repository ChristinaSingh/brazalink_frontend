import React from "react";

const Banner = ({ business }) => {
  return (
    <section
      className="page-title-banner"
      style={{ backgroundImage: `url(${business?.step4?.background_image})` }}
    >
      <div className="container">
        <div className="row m-0 align-items-end detail-swap">
          <div className="tr-list-wrap">
            <div className="tr-list-detail d-flex">
              <div className="tr-list-thumb">
                <img
                  src={business?.step4?.logo}
                  className="img-responsive"
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div className="tr-list-info">
                <div className="cate-gorio">
                  <a href="#">{business?.step3?.category}</a>
                </div>
                <h4 className="veryfied-list" style={{ color: "#000" }}>
                  {business?.step1?.businessName}
                </h4>
                <p style={{ color: "#000" }}>
                  <i className="ti-location-pin" />
                  {business?.step2?.apartment}, {business?.step2?.street} ,
                  {business?.step2?.state} ,{business?.step2?.zipcode}{" "}
                </p>
                <div className="tr-list-ratting">
                  <div className="ratting-group">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                    <a href="#" className="overall-reviews">
                      (42 Reviews)
                    </a>
                  </div>
                </div>
              </div>
              <ul className="d-flex icondetail mt-5">
                <li>
                  <a href="#">
                    <img src="/assets/img/11.png" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/assets/img/12.png" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/assets/img/13.png" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
