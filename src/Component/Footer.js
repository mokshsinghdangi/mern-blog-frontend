import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div id="footer">
        <div className="footer-home">
          <h3 className="footer-head">Menu</h3>
          <ul className="footer-menu">
            <li className="footer-items">
              <Link to="/">Home</Link>
            </li>
            <li className="footer-items">
              <Link to="/blogs">Blogs</Link>
            </li>
            <li className="footer-items">
              <Link to="/about">About</Link>
            </li>
            <li className="footer-items">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer-social">
          <h3 className="footer-head">Social</h3>
          <ul className="footer-menu">
            <li className="footer-social-menu-item footer-items">
              <Link to="/">Instagram</Link>
            </li>
            <li className="footer-social-menu-item footer-items">
              <Link to="/">Github</Link>
            </li>
            <li className="footer-social-menu-item footer-items">
              <Link to="/">LinkedIn</Link>
            </li>
            <li className="footer-social-menu-item footer-items">
              <Link to="/">Twitter</Link>
            </li>
          </ul>
        </div>
        <p className="credits">Build and right reserved by Moksh Singh Dangi</p>
      </div>
    </>
  );
};

export default Footer;
