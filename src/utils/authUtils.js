import axios from "axios";

const API_URL = "http://localhost:8000";
// const API_URL = "https://5.78.110.146:8000";
const userExist = JSON.parse(localStorage.getItem("user"));

export const getBusinessDetails = async (data) => {
  try {
    const res = await axios.get(`${API_URL}/business/all-business`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    throw error;
  }
};

export const getBusinessById = async (id) => {
  console.log("Id here:-",id);
  try {
    const res = await axios.post(
      `${API_URL}/business/get-business/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return res?.data?.data?.business;
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

export const getLikesIncrease = async (id) => {
  console.log("Id here:-", id);

  try {
    const res = await axios.post(`http://localhost:8000/business/like/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    throw error;
  }
};
