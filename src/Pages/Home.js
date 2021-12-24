import React from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1 id="welcome-home">Welcome to Trap Blogs</h1>
      <Link to="/blogs" id="explore-btn">
        <ArrowForwardIcon className="icons" /> Explore
        <ArrowBackIcon className="icons" />
      </Link>
    </div>
  );
};

export default Home;
