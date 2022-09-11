import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProgressBar from "../helpers/ProgressBar";

class Home extends Component {
  individualSkill(name, amount, url) {
    return (
      <Link className="white-text no-underline" to={url}>
        <div className="skill">
          <span className="typewriter">{name}</span>
          <div className="skill-progress-bar">
            <ProgressBar percentage={amount} fill="#1a5a7f" />
          </div>
        </div>
      </Link>
    );
  }

  render() {
    return (
      <div className="wrapper">
        <div className="top-exp">
          <div className="typewriter">Programmer</div>
          <div>
            <Link className="white-text no-underline" to="/experience">
              <span className="typewriter">Lvl 4</span>
            </Link>
          </div>
          <div>
            <Link className="white-text no-underline" to="/experience">
              <span className="typewriter">Exp</span>
              <div className="exp-holder">
                {/* <progress className="exp-bar" value={30} max="100" /> */}
                <ProgressBar percentage="30" />
              </div>
            </Link>
          </div>
        </div>
        <div className="home-wrapper">
          <div className="home-side-column">
            <h3 className="title-font">
              <Link className="white-text no-underline" to="/about">
                Riley Kuhlman
              </Link>
            </h3>
            <div className="img-container">
              <img
                className="svg-blue"
                fill="#FFF"
                src="https://res.cloudinary.com/dymfw7qfi/image/upload/v1592856406/RileyPortraitVectorLineArt.svg"
                alt="me"
              />
            </div>
          </div>
          <div className="two-rows h100 center-vertical-parent no-overflow">
            <div className="center-vertical-child">
              <h3 className="title-font">Skills</h3>
              {/* Combine into web design */}
              {this.individualSkill("Web Dev", 80, "skill/web-design")}
              {this.individualSkill("Nodejs", 50, "skill/node")}
              {this.individualSkill("React", 70, "skill/react")}
              {this.individualSkill("Unity", 60, "skill/unity")}
              {this.individualSkill("Python", 79, "skill/python")}
              {this.individualSkill("Git", 68, "skill/git")}
              {this.individualSkill("Art", 40, "skill/art")}
              {this.individualSkill("Math", 95, "skill/math")}
              {/* Consider adding
              Audacity
              ​MuseScore
              ​Aseprite
              ​GIMP
              Krita
              OpenToonz
              ​Excel
              
              or just say like
              Art
              Music
              Math
              */}
            </div>
          </div>
          <div className="no-overflow">
            <Link className="white-text no-underline" to="/achievements">
              <h3 className="title-font mb-none mt-none">Achievements</h3>
              <img
                className="image-icon"
                src="https://res.cloudinary.com/dymfw7qfi/image/upload/v1584463379/award.svg"
                alt="trophy"
              />
            </Link>
          </div>
          <div className="no-overflow mt-small">
            <Link className="white-text no-underline" to="/projects">
              <h3 className="title-font mb-none mt-small">Projects</h3>
              <img
                className="image-icon"
                src="https://res.cloudinary.com/dymfw7qfi/image/upload/v1584464589/project-management.svg"
                alt="lightbulb"
              />
            </Link>
          </div>
          <div className="two-columns">
            <Link to="/about" className="white-text no-underline">
              <div className="physical-stats">
                <div className="title-font ">
                  Freshman CS Major at Rice University
                </div>
              </div>
              <div className="home-description typewriter scrollable">
                A Texas programmer specializing in frontend development and
                React. Skilled in math, but low art skills and limited
                experience.
                <div className="height-buffer" />
                <div className="height-buffer" />
                <div className="height-buffer" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
