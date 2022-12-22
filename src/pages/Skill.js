import React, { Component } from "react";
import { Route } from "react-router-dom";
import Separator from "../helpers/PageSeparator";
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
  RocketEngine,
  ProgrammingLanguageCards
} from "../helpers/Projects";
import { MathematicalGerrymandering } from "../helpers/Projects";
import {Title, SubTitle} from "../helpers/Titles";

// shows *all* of the projects for a skill

class Skill extends Component {
  render() {
    return (
      <div className="scrollable">
        <div class="about-text no-top-space">
          <Route path="/skill/web-design">
            <Title>Web Design</Title>

            <SubTitle href="/skill/react">React Websites</SubTitle>
            <div>
              I have found the most success using React (in fact, I used it to build this website). I like the component based development style, but it is not an overwhelming amount of additional stuff. I have used it to make some really interactive things, but I also like it for simple informational sites.
            </div>
            <ProspectTheory />
            <DiceSimulator />
            
            <Separator />
            <SubTitle>Portfolios</SubTitle>
            <div>
              Artfolio is also written in React, but I put it here along with a few other attempts I have made to collect my work. 
            </div>
            <Artfolio />
            <CodePenPortfolio />
            <WeeblyPortfolio />

            <Separator />
            <SubTitle>Chrome Extensions</SubTitle>
            <NASAImages />
            <CopyAndPaste />

            <Separator />
            <SubTitle>Miscellaneous</SubTitle>
            <ProgrammingLanguageCards />
            <ChatApp />
            <MathematicalGerrymandering />
            <MyBrotherSamIsDead />
            <StackEditContribution />
          </Route>

          <Route path="/skill/react">
            <Title>React</Title>
            <ProspectTheory />
            <ChemistryClicker />
            <Artfolio />
            <ProgrammingLanguageCards />
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
            <Modeling />
            <Artfolio />
            <Medusa />
            <Well />
            {/* Have a couple of videos that I edited*/}
            {/* Have some music */}
          </Route>

          <Route path="/skill/math-and-data">
            {/* Include AI, basketball salaries predictions, comp baseball predictions, circle center finder, and physics stuff. Add height predictor and any hard algorithms that I write. */}
            <Title>Math &#38; Data Science</Title>

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
            
            <RocketEngine />
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
