import React from "react";
import { Link } from "react-router-dom";
// import About from "../pages/About";

function Home() {
  return (
    <div>
      <header>
        <div className="header">
          <div className="head">
            <h3> HELLO I'M </h3>
            <h1> Sarah hasan </h1>
            <div className="line"></div>
            <h3> Full Stack Developer </h3>
            <div className="buttons">
              <div className="button">
                {" "}
                <a href="Cv-saraLast.pdf" target="_blank">
                  {" "}
                  DOWNLOAD CV{" "}
                </a>{" "}
              </div>
              <div className="button">
                {" "}
                <Link to="/portfolio"> PORTOFOLIO </Link>{" "}
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <About /> */}
    </div>
  );
}

export default Home;
