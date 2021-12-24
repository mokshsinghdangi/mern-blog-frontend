import React, { useEffect, useState } from "react";
import me from "../images/me.png";

const About = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="about-main">
        <h1
          className="back-head"
          style={{ transform: `translateX(${offsetY * 1.3}px)` }}
        >
          About us
        </h1>
        <h1 className="about-head">Trap Blogs</h1>
        <div className="about-us">
          <div className="who-i-am">
            <h1 className="me-head">&#123; About this Project &#125;</h1>
            <div className="text-img">
              <div className="left">
                <p>This is the full stack blog project.</p>
                <p>Stack:- MERN.</p>
                <p>
                  The data like comments will be saved using MongoDB in local
                  storage.
                </p>
              </div>
              <div className="right">
                <img src={me} alt="me" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
