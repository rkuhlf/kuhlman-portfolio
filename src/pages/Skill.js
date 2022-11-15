import React, { Component } from "react";
import { Route } from "react-router-dom";
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
  GithubProfile,
  StackEditContribution,
  Medusa,
  Modeling,
  Well,
  Heart,
  ProCons,
  RocketSimulation
} from "../helpers/Projects";
import { MathematicalGerrymandering } from "../helpers/Projects";
import Title from "../helpers/Title";

// shows *all* of the projects for a skill

class Skill extends Component {
  render() {
    return (
      <div className="scrollable">
        <div class="about-text no-top-space">
          <Route path="/skill/web-design">
            <Title>Web Design</Title>
            <ProspectTheory />
            <ChatApp />
            <MyBrotherSamIsDead />
            <StackEditContribution />
            <Artfolio />
            <DiceSimulator />
            <NASAImages />
            <CopyAndPaste />
            <MathematicalGerrymandering />
            <Artfolio />
            <CodePenPortfolio />
            <WeeblyPortfolio />
          </Route>

          <Route path="/skill/react">
            <Title>React</Title>
            <ProspectTheory />
            <ChemistryClicker />
            <DiceSimulator />
            <LinkShortener />
            <ProCons />
            <IdeaGenerator />
            <Artfolio />
          </Route>

          <Route path="/skill/unity">
            <Title>Unity</Title>
            <Hybreeder />
            <Runing />
            <TheGreatestSnowball />
            <PowerOfMelody />
            <Omitl />
          </Route>

          <Route path="/skill/git">
            <Title>Git</Title>
            <GithubProfile />
            <StackEditContribution />
          </Route>

          <Route path="/skill/python">
            <Title>Python</Title>
            <RocketSimulation />
            <PictureOfPictures />
            <WordGame />
          </Route>

          <Route path="/skill/art">
            <Title>Art</Title>
            <Modeling />
            <Artfolio />
            <Medusa />
            <Well />
            {/* Have a couple of videos that I edited*/}
            {/* Have some music */}
          </Route>

          <Route path="/skill/math-and-data">
            {/* Include AI, basketball salaries predictions, comp baseball predictions, circle center finder, and physics stuff. Add height predictor and any hard algorithms that I write. */}
            <Title>Math ;amp Data Science</Title>

            <br />
            <br />
            <div>
              I have quite a few traditional data science projects, but I really love math, and some of my best stuff comes from taking programming and having fun with math problems. Although big data usually ends up with the most real-world applications, sometimes useful things are discovered in theoretical exploration. That being said, here are a few of my models. 
            </div>
            

            <SoccerXG />
            <EarthQuakeData />

            <DiceSimulator />

            <RocketSimulation />
            <ProspectTheory />
            <Heart />
            
          </Route>

          <Route path="/skill/engineering">
            {/* Include AI, basketball salaries predictions, comp baseball predictions, circle center finder, and physics stuff. Add height predictor and any hard algorithms that I write. */}
            <Title>Engineering</Title>

            <br />
            <br />
            <div>
              In my experience programming, I have branched out to a few other aspects of engineering. I've stayed mostly within electrical engineering and mechanical engineering, and I hope that having a wide variety of skills will improve my problem solving ability. It's also a ton of fun to make stuff with my hands.
            </div>
            
            {/* <RocketEngine /> */}
            {/* <OxidizerStand /> */}
            {/* <CAD /> */}
            {/* <Machining /> */}
            
          </Route>            
          
        </div>
      </div>
    );
  }
}

export default Skill;
