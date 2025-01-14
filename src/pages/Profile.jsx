import React, { useEffect, useState } from "react";
import ProfileSidebar from "../components/ProfileSidebar";
import axios from "axios";
import { useParams } from "react-router-dom";

const Profile = () => {
  const userId = useParams();
  const user = {
    userId: userId.id,
  };
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    address: "",
    zip: "",
    about: "",
    userId: user?.userId || "",
  });

  console.log("User", userData);

  // Fetch user profile data
  const getProfile = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/auth/get-profile/",
        user
      );
      console.log("Response: ", response.data.user);
      const data = response.data.user;
      setUserData((prev) => ({
        ...prev,
        ...data,
      }));
    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
  };

  console.log("Profile", userData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const saveProfile = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/auth/update-profile/",
        userData
      );
      if (response.status === 200) {
        alert("Profile updated successfully!");
      }
    } catch (error) {
      console.error("Error updating profile data:", error);
      alert("Failed to update profile.");
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <>
      <div id="main-wrapper">
        <section>
          <div className="container">
            <div className="row">
              <ProfileSidebar />
              <div className="col-lg-9 col-md-8 col-sm-12">
                <div className="dashboard-wraper">
                  <div className="form-submit">
                    <div className="submit-section">
                      <h4>Profile</h4>
                      <hr />
                      <form onSubmit={saveProfile}>
                        <div className="form-row">
                          <div className="form-group col-md-6">
                            <label>Full Name</label>
                            <input
                              type="text"
                              className="form-control"
                              name="fullName"
                              value={
                                userData.firstName + " " + userData.lastName
                              }
                              onChange={handleChange}
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label>Email</label>
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              value={userData.email}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label>Address</label>
                            <input
                              type="text"
                              className="form-control"
                              name="address"
                              value={userData.address}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label>Zip</label>
                            <input
                              type="text"
                              className="form-control"
                              name="zip"
                              value={userData.zipcode}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="form-group col-md-12">
                            <label>About</label>
                            <textarea
                              className="form-control"
                              name="about"
                              value={userData.about}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-group col-lg-12 col-md-12">
                            <button className="btn btn-theme" type="submit">
                              Save Changes
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <a id="back2Top" className="top-scroll" title="Back to top" href="#">
          <i className="ti-arrow-up" />
        </a>
      </div>
    </>
  );
};

export default Profile;
