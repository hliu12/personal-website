import React from "react";
import "./intro.css";

const Intro = () => {
  return (
    <div className="about">
      <div className="left">
        <div className="left-container">
          <h1 className="name">Hi, my name is Henry.</h1>
          <h2 className="who-i-am">I'm a student.</h2>
          <div className="title">
            <div className="title-container">
              <div className="title-item">Student</div>
              <div className="title-item">Programmer</div>
              <div className="title-item">Dancer</div>
              <div className="title-item">Musician</div>
              <div className="title-item">Degenerate</div>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="right-container">Right Container</div>
      </div>
    </div>
  );
};

export default Intro;
