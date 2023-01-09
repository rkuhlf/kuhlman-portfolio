import React, { Component } from "react";
import {SubTitle, Title} from "../helpers/Titles";
import {
  CodePenPortfolio,
  WeeblyPortfolio,
  PictureOfPictures,
  WordGame,
  DiceSimulator,
  ChatApp,
  ChemistryClicker,
  ProspectTheory,
  LinkShortener,
  TheGreatestSnowball,
  Omitl,
  PowerOfMelody,
  SoccerXG,
  EarthQuakeData,
  Hybreeder,
  Runing,
  MyBrotherSamIsDead,
  NASAImages,
  CopyAndPaste,
  Artfolio,
  IdeaGenerator,
  Heart,
  ProCons,
  RocketSimulation,
  Modeling,
  RocketEngine,
  OxidizerStand,
  NBASalaries
} from "../helpers/Projects";
import Separator from "../helpers/PageSeparator";

// shows all of the projects in a scrollable list

// TODO: cut down this list a little bit and make sure all of my skills have enough projects
class Projects extends Component {
  render() {
    return (
      <div className="scrollable">
        <Title>Projects</Title>

        <div className="about-text">
          This is a list highlighting my best projects, loosely organized by what skill the most relevant skill.
          <br />
          <br />
          <SubTitle>Python Scripts</SubTitle>
          <div>
            I always love programming in Python because of the ease of
            converting my thoughts into code, and I've made several of my
            favorite projects in it.
          </div>
          < RocketSimulation />
          < PictureOfPictures />
          {/* CEA */}

          <Separator />

          <SubTitle>React Sites</SubTitle>
          <div>
            My current favorite way to build apps is with reactjs. I love the
            simplicity and scalability of it.
          </div>
          < ProspectTheory />
          < ChemistryClicker />
          < ProCons />
          < IdeaGenerator />

          <Separator />

          <SubTitle>Websites with Backend</SubTitle>
          <div>
            I've built a couple of applications that make use of databases for a
            couple of projects in the past.
          </div>
          < ChatApp />
          {/* < TreeDoList /> */}


          <Separator />

          <SubTitle>Unity Games</SubTitle>
          <div>
            I've made lots of Unity games that you can see on my Itch page, and
            I like to take the opportunity to not only work on my programming
            skills, but also my game design and art skills. Usually I
            participate in short game jams, because otherwise I don't scope my
            project well.
          </div>
          < Hybreeder />
          < TheGreatestSnowball />
          < Omitl />
          < PowerOfMelody />
          < Runing />

          <Separator />

          <SubTitle>Data Analysis</SubTitle>
          <div>
            I love math, and I've dabbled in analyzing data a couple of times. The rocket simulation that I already mentioned is a great example, but I have some more numbers-oriented stuff as well.
          </div>
          < NBASalaries />
          < SoccerXG />
          < EarthQuakeData />
          < DiceSimulator />


          <Separator />

          <SubTitle>Miscellaneous Software</SubTitle>
          <div>
            I've done some other projects that I'm proud of, but they don't really fit into any other category.
          </div>
          < MyBrotherSamIsDead />
          < CopyAndPaste />
          < Modeling />

          <Separator />

          <SubTitle>Other Portfolios</SubTitle>
          <div>
            I've made several portfolios as I progressed as a programmer, and I decided to keep them here for posterity's sake. Although the spirit and effort was constant, sometimes the content was lacking.
          </div>
          < Artfolio />
          < CodePenPortfolio />
          < WeeblyPortfolio />



          <Separator />
          <SubTitle>Engineering</SubTitle>
          <div>
            In my experience programming, I have branched out to a few other aspects of engineering. I've stayed mostly within electrical engineering and mechanical engineering, and I hope that having a wide variety of skills will improve my problem solving ability. It's also a ton of fun to make stuff with my hands.
          </div>

          <RocketEngine />
          <OxidizerStand />

        </div>
      </div>
    );
  }
}

export default Projects;
