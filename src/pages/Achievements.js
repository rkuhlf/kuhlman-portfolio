import React, { Component } from "react";
import Title from "../helpers/Title";
import Achievement from "../helpers/Achievement";
import { Link } from "react-router-dom";

class Achievements extends Component {
  render() {
    return (
      <div className="scrollable">
        <Title>Achievements</Title>

        <div className="about-text">
          <Achievement
            title="Rocket World Record"
            linkTo="/achievement/rockets"
          >
            <div className="typewriter">
              Along with twenty teammates, I hold the world record for apogee of
              a high school rocket. I wrote a numerical simulation of the rocket
              flight using Python, which was verified to 5% accuracy when we
              launched our rocket to 45,000 feet.
            </div>
          </Achievement>

          <Achievement
            title="Scholarly Awards"
            linkTo="/achievement/scholarly-awards"
          >
            <div className="typewriter">
              I was awarded National Merit Scholar in 2022, received AP Scholar
              with Distinction in 2021, and graduated valedictorian of my class
              of 565 in 2022.
            </div>
          </Achievement>

          <Achievement
            title="UIL Region Qualification"
            linkTo="/achievement/uil-region"
          >
            <div className="typewriter">
              I placed 4th at State and 3rd at Regionals in 2021 in UIL
              Academics for Computer Science. I qualified for region in CS (you
              can read more{" "}
              <a
                className="white-text"
                href="https://www.uiltexas.org/academics/stem/computer-science"
              >
                here
              </a>
              ) every year of highschool. It involved answering multiple choice
              Java questions and writing Java solutions to computer science
              problems.
            </div>
          </Achievement>

          <Achievement title="Github Game Off" linkTo="/project/hybreeder">
            <div className="typewriter">
              I placed third in theme interpretation in the{" "}
              <a
                className="white-text"
                target="_blank"
                href="https://itch.io/jam/game-off-2018"
              >
                Github Game Off 2018
              </a>{" "}
              with my game,{" "}
              <Link className="white-text" to="project/hybreeder">
                Hybreeder
              </Link>
              .
            </div>
          </Achievement>

          <Achievement title="Ludum Dare" linkTo="/achievement/ludum-dare">
            <div className="typewriter">
              I completed{" "}
              <a
                className="white-text"
                target="_blank"
                href="https://ldjam.com/users/rkuhl/games"
              >
                three Ludum Dare games
              </a>
              :{" "}
              <Link className="white-text" to="project/omitl">
                Omitl
              </Link>
              ,{" "}
              <a
                target="_blank"
                className="white-text"
                href="https://ldjam.com/events/ludum-dare/42/deluge"
              >
                Deluge
              </a>
              , and{" "}
              <a
                target="_blank"
                className="white-text"
                href="https://ldjam.com/events/ludum-dare/40/money-bags"
              >
                Money Bags
              </a>
              . I love Ludum Dare because it always gives me good ideas and I
              love to create content, but I've never been able to use my time
              well enough to have something I'm really happy with.
            </div>
          </Achievement>
          <div className="height-buffer" />
          <div className="height-buffer" />
          <div className="height-buffer" />
          <div className="height-buffer" />
        </div>
      </div>
    );
  }
}

export default Achievements;
