import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Github from "@material-ui/icons/GitHub";

const Social = () => {
  return (
    <>
      <div className="blog-social">
        <h1 className="social side-head">Social</h1>
        <div className="social-icons">
          <a
            href="https://www.instagram.com/mokshsinghdangi"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://twitter.com/DangiMoksh"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/moksh-singh-dangi/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedIn />
          </a>
          <a
            href="https://github.com/mokshsinghdangi"
            target="_blank"
            rel="noreferrer"
          >
            <Github />
          </a>
        </div>
      </div>
    </>
  );
};

export default Social;
