import React from "react";
import axios from "axios";

const LandingPage = () => {
  return <h2>LandingPage</h2>;
};

LandingPage.getInitialProps = async () => {
  try {
    console.log("from initial props");
    const response = await axios.get("/api/users/currentuser");
    console.log("current user", response.data);
  } catch (error) {
    console.error(error);
  }
  return { color: "red" };
};

export default LandingPage;
