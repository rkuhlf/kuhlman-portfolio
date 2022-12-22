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
              {this.individualSkill("React", 70, "skill/react")}
              {this.individualSkill("Python", 89, "skill/python")}
              {this.individualSkill("Unity", 40, "skill/unity")}
              {this.individualSkill("Data", 95, "skill/math-and-data")}
              {this.individualSkill("Git", 75, "skill/git")}
              {this.individualSkill("Engr.", 60, "skill/engineering")}
              {this.individualSkill("Art", 40, "skill/art")}
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
                <i>A Texas programmer specializing in frontend development and
                React. Skilled in math and general engineering problems, but limited
                experience.</i>

                <br />
                <br />
                
                "I started programming in eighth grade using Khan Academy's Javascript tutorials, and I quickly fell in love with the idea of creating tools for other people to use. I liked putting my math skills to work, so I made quite a few data analyses, then followed them up with some explanatory websites. These days I am honing my algorithms and data structures at Rice, looking for summer internships."
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
