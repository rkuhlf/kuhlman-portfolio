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
  Well,
  Heart,
  ProCons,
  RocketSimulation
} from "../helpers/Projects";
import { MathematicalGerrymandering } from "../helpers/Projects";
import Title from "../helpers/Title";

// shows all of the projects for a skill

class Skill extends Component {
  render() {
    return (
      <div className="scrollable">
        <div class="about-text no-top-space">
          <Route path="/skill/web-design">
            <Title>Web Design</Title>
            <NASAImages />
            <CopyAndPaste />
            <MathematicalGerrymandering />
            <MyBrotherSamIsDead />
            <CodePenPortfolio />
            <WeeblyPortfolio />
          </Route>
          <Route path="/skill/node">
            <Title>Node</Title>
            <ChatApp />
            {/* <TreeDoList /> */}
          </Route>
          <Route path="/skill/react">
            <Title>React</Title>
            <ProspectTheory />
            <ChemistryClicker />
            {/* <TreeDoList /> */}
            {/* <DiceSimulator /> */}
            <LinkShortener />
            <ProCons />
            <IdeaGenerator />
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
            <Artfolio />
            <Medusa />
            <Well />
            {/* Have a couple of drawings */}
            {/* Have a couple of videos */}
            {/* Have some music */}
          </Route>

          <Route path="/skill/math">
            <Title>Math</Title>
            <RocketSimulation />
            {/* <YouTubeHistory /> */}
            <Heart />
            <SoccerXG />
            <ProspectTheory />
            <EarthQuakeData />
          </Route>
        </div>
      </div>
    );
  }
}

export default Skill;
