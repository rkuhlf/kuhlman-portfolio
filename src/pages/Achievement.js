import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Project from "../helpers/ProjectPages";

class Achievement extends Component {
  render() {
    return (
      <div className="scrollable">
        <Route path="/achievement/rockets">
          <Project
            url="https://sites.google.com/student.brazosportisd.net/goddard2022"
            img="https://res.cloudinary.com/dymfw7qfi/image/upload/v1662319446/WebRocketReveal_1.jpg"
            title="SystemsGo Rocketry"
          >
            Along with twenty teammates, I hold the world record for apogee of a
            high school rocket, as well as the world record for student rocket
            launch in 2022, and the record for hybrid launch in 2022. We
            designed the rocket's airframe and hybrid engine, 3D printing our
            own fuel grain and machining our own ox tank.
            <br />
            <br />I was personally responsible for the design of the nozzle and
            fins, as well as some sealing around the combustion chamber. I was
            also the head of the dynamics team, in charge of simulations. On
            that team, I wrote a numerical simulation of the rocket flight using
            Python, which was verified to 5% accuracy when we launched our
            rocket to 45,000 feet MSL, launching from ~3,000 feet above sea
            level at the launch site Mexico. I also wrote most of the little
            documentation website in Google sites.
          </Project>
        </Route>

        <Route path="/achievement/scholarly-awards">
          <Project
            img="https://res.cloudinary.com/dymfw7qfi/image/upload/v1662319871/Riley_Kuhlman_1.jpg"
            title="Scholarly Awards"
          >
            I was awarded National Merit scholar in 2021 with a score of 1480 on
            the PSAT. I tend to do well on standardized tests, scoring 1560 on
            the SAT and 35 on the ACT as well. I am an AP Scholar with
            Distinction, and have taken 13 AP tests with an average score of 4.7
            (out of 5). I was awarded Student Scholar from my local community
            college for completing a 15 credit hours while in high school, and I
            graduated valedictorian of my class of 565.
          </Project>
        </Route>

        <Route path="/achievement/uil-region">
          <Project
            img="https://res.cloudinary.com/dymfw7qfi/image/upload/v1662320544/UIL_Academic_Team.jpg"
            title="CS Competition"
          >
            I placed 4th at State and 3rd at Regionals in 2021 in UIL Academics
            for Computer Science. I qualified for region in CS (you can read
            more{" "}
            <a
              className="white-text"
              href="https://www.uiltexas.org/academics/stem/computer-science"
            >
              here
            </a>
            ) every year of highschool. It involved answering multiple choice
            Java questions and writing Java solutions to computer science
            problems.
          </Project>
        </Route>

        <Route url="achievement/ludum-dare">
          <Project
            title="Ludum Dare"
            img="https://res.cloudinary.com/dymfw7qfi/image/upload/v1662320793/15a18424c79eae_ognqfjklhmeip.png"
          >
            I completed{" "}
            <a className="white-text" target="_blank" href="https://ldjam.com/users/rkuhl/games">
              three Ludum Dare games
            </a>:{" "}
            <Link className="white-text" to="project/omitl">
              Omitl
            </Link>,{" "}
            <a target="_blank" className="white-text" href="https://ldjam.com/events/ludum-dare/42/deluge">
              Deluge
            </a>, and{" "}
            <a target="_blank" className="white-text" href="https://ldjam.com/events/ludum-dare/40/money-bags">
              Money Bags
            </a>.
            I love Ludum Dare because it always gives me good ideas and I love
            to create content, but I've never been able to use my time well
            enough to have something I'm really happy with.
          </Project>
        </Route>
      </div>
    );
  }
}

export default Achievement;
