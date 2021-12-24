import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="container">
        <div className="not-found">
          <h1 className="not-found-head">
            <span className="oops">OOPS!</span>404 Page not Found.
          </h1>
          <Link to="/" className="not-found-btn">
            Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
