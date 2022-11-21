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
  RocketSimulation,
  ProgrammingLanguageCards,
  RocketEngine
} from "../helpers/ProjectPages";
import { MathematicalGerrymandering } from "../helpers/Projects";

// File maps the projects url to the page for that project.
// Each page shows all of the text for just one project.

class Project extends Component {
  render() {
    // TODO: turn this into a dictionary and a for loop
    return (
      <div class="scrollable">
        <Route path="/project/code-pen" component={CodePenPortfolio} />
        <Route path="/project/weebly-portfolio" component={WeeblyPortfolio} />
        <Route path="/project/picture-of-pictures" component={PictureOfPictures} />
        <Route path="/project/rocket-simulation" component={RocketSimulation} />
        <Route path="/project/word-game" component={WordGame} />
        <Route path="/project/dice-simulator" component={DiceSimulator} />
        <Route path="/project/link-shortener" component={LinkShortener} />
        <Route path="/project/prospect-theory" component={ProspectTheory} />
        <Route path="/project/chemistry-clicker" component={ChemistryClicker} />
        <Route path="/project/chattax" component={ChatApp} />
        {/* <Route path="/project/treedo-list" component={TreeDoList} /> */}
        <Route path="/project/mathematical-gerrymandering" component={MathematicalGerrymandering} />
        <Route path="/project/earthquake-data" component={EarthQuakeData} />
        <Route path="/project/soccer-xg" component={SoccerXG} />
        <Route path="/project/youtube-history" component={YouTubeHistory} />
        <Route path="/project/hybreeder" component={Hybreeder} />
        <Route path="/project/runing" component={Runing} />
        <Route path="/project/omitl" component={Omitl} />
        <Route path="/project/greatest-snowball" component={TheGreatestSnowball} />
        <Route path="/project/power-of-melody" component={PowerOfMelody} />
        <Route path="/project/my-brother-sam-is-dead" component={MyBrotherSamIsDead} />
        <Route path="/project/nasa-images" component={NASAImages} />
        <Route path="/project/copy-paste" component={CopyAndPaste} />
        <Route path="/project/artfolio" component={Artfolio} />
        <Route path="/project/idea-generator" component={IdeaGenerator} />
        <Route path="/project/github" component={GithubProfile} />
        <Route path="/project/stackedit-contribution" component={StackEditContribution} />
        <Route path="/project/medusa" component={Medusa} />
        <Route path="/project/modeling" component={Modeling} />
        <Route path="/project/well" component={Well} />
        <Route path="/project/heart" component={Heart} />
        <Route path="/project/procons" component={ProCons} />
        <Route path="/project/programming-languages" component={ProgrammingLanguageCards} />
        <Route path="/project/rocket-engine" component={RocketEngine} />
      </div>
    );
  }
}

export default Project;
