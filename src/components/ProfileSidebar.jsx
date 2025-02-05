import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProfileSidebar = () => {
  const [idHere, setIdHere] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const parsedUser = JSON.parse(user);
      setIdHere(parsedUser.id);
    } else {
      console.log("No user found in localStorage.");
    }
  }, []);

  return (
    <div className="col-lg-3 col-md-4 col-sm-12">
      <div className="Reveal-dashboard-navbar">
        <div className="Reveal-d-user-avater">
          <img
            src="../assets/img/user-1.png"
            className="img-fluid avater"
            alt=""
          />
          <h4>John Doe</h4>
        </div>
        <div className="Reveal-dash-navigation">
          <ul>
            <li className="active">
              <Link to={`/profile/${idHere}`}>
                <i className="ti-user" />
                My Profile
              </Link>
            </li>
            <li>
              <a href="#">
                <i className="ti-bell" />
                Notifications
              </a>{" "}
            </li>
            <li>
              <Link to="/change-language">
                <i className="fa fa-language" />
                Change Language
              </Link>
            </li>
            <li>
              <Link to="/support">
                <i className="fa fa-headphones" />
                Support
              </Link>
            </li>
            <li>
              <Link to="/chat-support">
                <i className="fa fa-headphones" />
                Chat Support
              </Link>
            </li>
            <li>
              <Link to="/login">
                <i className="ti-power-off" />
                Log Out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;
