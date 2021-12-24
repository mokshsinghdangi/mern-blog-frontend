import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import PersonIcon from "@material-ui/icons/Person";
import PhoneIcon from "@material-ui/icons/Phone";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const Navbar = () => {
  function hideMenu() {
    let menuOpen = document.querySelector(".check").checked;

    if (menuOpen === true) {
      document.querySelector(".check").checked = false;
    }
  }
  window.addEventListener("scroll", hideMenu);

  return (
    <>
      <header className="navigation">
        <div className="menu">
          <div id="left-nav">
            <span className="logo">
              <Link to="/">Trap Blogs</Link>
            </span>
          </div>
          <nav id="right-nav">
            <input type="checkbox" id="check" className="check" />
            <label for="check" className="checkbtn">
              <MenuIcon />
            </label>
            <ul className="list">
              <li className="item">
                <Link to="/">
                  Home <HomeIcon className="icons" />
                </Link>
              </li>
              <li className="item">
                <Link to="/blogs">
                  Blogs <MenuBookIcon className="icons" />
                </Link>
              </li>
              <li className="item">
                <Link to="/about">
                  About <PersonIcon className="icons" />
                </Link>
              </li>
              <li className="item">
                <Link to="/contact">
                  Contact <PhoneIcon className="icons" />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
