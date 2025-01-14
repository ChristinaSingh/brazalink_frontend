import axios from "axios";

const API_URL = "http://localhost:8000";
// const API_URL = "http://193.203.161.2:8000";
const userExist = JSON.parse(localStorage.getItem("user"));

export const getBusinessDetails = async (data) => {
  try {
    const res = await axios.post(
      `http://localhost:8000/business/get_business`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return res.data;
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    throw error;
  }
};

export const getBusinessById = async (id) => {
  try {
    const res = await axios.post(
      `http://localhost:8000/business/get_business_details`,
      { id },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return res.data;
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    throw error;
  }
};

export const getFaqsDetails = async () => {
  try {
    const res = await axios.get(
      `http://localhost:8000/business/faqs-section/faqs`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return res.data;
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    throw error;
  }
};

export const getLikesIncrease = async () => {
  try {
    const res = await axios.get(
      `http://localhost:8000/business/like_business`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return res.data;
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    throw error;
  }
};
