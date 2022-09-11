import React, { Component } from "react";
import Title from "../helpers/Title";
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
  TreeDoList,
  TheGreatestSnowball,
  Omitl,
  PowerOfMelody,
  SoccerXG,
  EarthQuakeData,
  YouTubeHistory,
  Hybreeder,
  Runing,
  MyBrotherSamIsDead,
  NASAImages,
  CopyAndPaste,
  Artfolio,
  IdeaGenerator,
  Medusa,
  Heart,
  ProCons
} from "../helpers/Projects";

// shows all of the projects in a scrollable list

class Projects extends Component {
  render() {
    return (
      <div className="scrollable">
        <Title>Projects</Title>
        <div className="about-text">
          This is a collection of the different projects that I have worked on
          organized by what skill they show best.
          <h2 className="title-font white-text no-underline">
            Other Portfolios
          </h2>
          <div>
            I've made several other portfolios as I progressed as a programmer.
          </div>
          {CodePenPortfolio()}
          {WeeblyPortfolio()}
          {Artfolio()}
          <h2 className="title-font white-text no-underline">Python Scripts</h2>
          <div>
            I always love programming in python because of the ease of
            converting my thoughts into code, and I've made several of my
            favorite projects in it.
          </div>
          {PictureOfPictures()}
          {WordGame()}
          <h2 className="title-font white-text no-underline">React Sites</h2>
          <div>
            My current favorite way to build apps is with reactjs. I love the
            simplicity and scalability of it.
          </div>
          {LinkShortener()}
          {ProspectTheory()}
          {ChemistryClicker()}
          {ProCons()}
          {IdeaGenerator()}
          <h2 className="title-font white-text no-underline">
            Websites with Backend
          </h2>
          <div>
            I've built a couple of applications that make use of databases for a
            couple of projects in the past.
          </div>
          {ChatApp()}
          {/* {TreeDoList()} */}
          <h2 className="title-font white-text no-underline">Unity Games</h2>
          <div>
            I've made lots of Unity games that you can see on my Itch page, and
            I like to take the opportunity to not only work on my programming
            skills, but also my game design and art skills. Usually I
            participate in short game jams, because otherwise I don't scope my
            project well.
          </div>
          {TheGreatestSnowball()}
          {Omitl()}
          {PowerOfMelody()}
          {Hybreeder()}
          {Runing()}
          <h2 className="title-font white-text no-underline">Data Analysis</h2>
          <div>
            I love math, and I've dabbled in analyzing data a couple of times.
          </div>
          {SoccerXG()}
          {Heart()}
          {EarthQuakeData()}
          {/* {YouTubeHistory()} */}
          <h2 className="title-font white-text no-underline">Miscellaneous</h2>
          <div>
            I've done some other projects that I'm proud of through various
            other mediums.
          </div>
          {MyBrotherSamIsDead()}
          {NASAImages()}
          {CopyAndPaste()}
        </div>
      </div>
    );
  }
}

export default Projects;
