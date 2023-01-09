import React from "react";
import { Link } from "react-router-dom";
import { StyledLink } from "./Links";

// this is a list of all of my projects so that I can just import the ones I want. The description in the box should be a short caption.

// Other Portfolios
export function CodePenPortfolio() {
  return (
    <Project
      url="/project/code-pen"
      img="https://res.cloudinary.com/dymfw7qfi/image/upload/v1584321776/screenshot-codepen.io-2020.03.png"
      title="Code Pen Portfolio"
    >
      This is a portfolio that I wrote in plain javascript and css on CodePen.
    </Project>
  );
}

export function WeeblyPortfolio() {
  return (
    <Project
      url="/project/weebly-portfolio"
      img="https://res.cloudinary.com/dymfw7qfi/image/upload/v1584321896/screenshot-programmingresume.weebly.com-2020.03.png"
      title="Weebly Portfolio"
    >
      This is a programming project portfolio that I built using Weebly and some
      custom css.
    </Project>
  );
}

export function Artfolio() {
  return (
    <Project
      url="/project/artfolio"
      img="https://res.cloudinary.com/dymfw7qfi/image/upload/v1585350938/screenshot-codesandbox.io-2020.03.png"
      title="Artfolio"
    >
      This is my art portfolio. I built it using React and codesandbox, and it
      shows the illustrations, pixel art, and 3D models that I am most proud of.
    </Project>
  );
}

// Art

export function Medusa() {
  return (
    <Project
      url="/project/medusa"
      img="https://res.cloudinary.com/dymfw7qfi/image/upload/v1586005385/MedusaDrawing.png"
      title="Medusa"
    >
      A chibi Medusa that I drew and colored with colored pencils.
    </Project>
  );
}

export function Modeling() {
  return (
    <Project
      url="/project/modeling"
      img="https://res.cloudinary.com/dymfw7qfi/image/upload/v1667685448/Food.png"
      title="3D Modeling"
    >
      The summer of Covid, I took up 3D modeling as a hobby. I published several asset packs to <StyledLink href="https://rkuhlf-assets.itch.io/">my itch.io page</StyledLink>, featuring animated marine and ice age animals, a snail, and a ton of food. Since then, I have collected over 8,000 views and 2,500 downloads, giving a little back to the game-making community that has given so much to me.
    </Project>
  );
}



export function Well() {
  return (
    <Project
      url="/project/well"
      img="https://res.cloudinary.com/dymfw7qfi/image/upload/v1586005562/Well.png"
      title="Well"
    >
      A 3D well that I modeled in Blender.
    </Project>
  );
}

// Python Programs

export function PictureOfPictures() {
  return (
    <Project
      url="/project/picture-of-pictures"
      img="https://raw.githubusercontent.com/rkuhlf/picture-of-pictures/master/final_image.jpg"
      title="Picture of Pictures"
    >
      This is a Python script that takes a large amount of input pictures and
      attempts to replicate a target picture with them.
    </Project>
  );
}

export function WordGame() {
  return (
    <Project
      url="/project/word-game"
      img="https://res.cloudinary.com/dymfw7qfi/image/upload/v1584322418/screenshot-wordgame.png"
      title="Word Game"
    >
      This is a simple game written in Python with the library PyGame where you
      try to find three letter words in a grid.
    </Project>
  );
}

// React Programs

export function DiceSimulator() {
  return (
    <Project
      url="/project/dice-simulator"
      img="https://res.cloudinary.com/dymfw7qfi/image/upload/v1584359907/screenshot-react-dice-simulator.stackblitz.io-2020.03.png"
      title="Dice Simulator"
    >
      I built this project to help me visualize my odds when rolling variable
      numbers of dice.
    </Project>
  );
}

export function LinkShortener() {
  return (
    <Project
      url="/project/link-shortener"
      img="https://res.cloudinary.com/dymfw7qfi/image/upload/v1584360092/screenshot-react-lnk-shrtner.stackblitz.io-2020.03.png"
      title="Lnk Shrtner"
    >
      I built a simple link shortener website using a cool free link shortening
      API and bootstrap.
    </Project>
  );
}

export function ProspectTheory() {
  return (
    <Project
      url="/project/prospect-theory"
      img="https://res.cloudinary.com/dymfw7qfi/image/upload/v1584360308/screenshot-prospect-theory.herokuapp.com-2020.03.png"
      title="Prospect Theory"
    >
      I programmed and published a comprehensive explanation of the economic
      principle of Prospect Theory using React and Heroku.
    </Project>
  );
}

export function ProCons() {
  return (
    <Project
      url="/project/procons"
      img="https://res.cloudinary.com/dymfw7qfi/image/upload/v1591564795/ScreenShotOfProsCons.png"
      title="Procons"
    >
      A simple decision making helper, it allows you to list out the pros and
      cons of a potential situation.
    </Project>
  );
}

export function ChemistryClicker() {
  return (
    <Project
      url="/project/chemistry-clicker"
      img="https://res.cloudinary.com/dymfw7qfi/image/upload/v1584360660/screenshot-nspty.csb.app-2020.03.png"
      title="Chemistry Clicker"
    >
      I built my first game in react using flaticon for the art. It's a clicker
      game about building as much plastic as you can.
    </Project>
  );
}

export function IdeaGenerator() {
  return (
    <Project
      url="/project/idea-generator"
      img="https://res.cloudinary.com/dymfw7qfi/image/upload/v1585837453/screenshot-xizfj.csb.app-2020.04.png"
      title="Idea Generator"
    >
      I built this to help me come up with ideas for new websites or games.
    </Project>
  );
}

// Backend

export function ChatApp() {
  return (
    <Project
      url="/project/chattax"
      img="https://res.cloudinary.com/dymfw7qfi/image/upload/v1584371653/screenshot-chattax.herokuapp.com-2020.03.png"
      title="Chattax"
    >
      I built a chat app using node and socket.io to figure out the basics of
      backend programming.
    </Project>
  );
}

// TODO: finish adding
export function WhatsThatWord() {
  return (
    <Project
      url="/project/whatsthatword"
      img="https://res.cloudinary.com/dymfw7qfi/image/upload/v1584371653/screenshot-chattax.herokuapp.com-2020.03.png"
      title="What's That Word"
    >
      My first delve into creating an API for my own purposes.
    </Project>
  );
}

export function TreeDoList() {
  return (
    <Project url="/project/treedo-list" img="#" title="Tree Do List">
      I built a unique, node based to do list in react.
    </Project>
  );
}

// P5js

export function MathematicalGerrymandering() {
  return (
    <Project
      url="/project/mathematical-gerrymandering"
      img="https://res.cloudinary.com/dymfw7qfi/image/upload/v1584371728/screenshot-mathematical-gerrymandering.weebly.com-2020.03.png"
      title="Mathematical Gerrymandering"
    >
      A p5js canvas embedded within a weebly website. It shows how
      gerrymandering works and offers a button to optimize gerrymandering for a
      generate situation.
    </Project>
  );
}

// Data Analysis

export function RocketSimulation() {
  return (
    <Project
      url="/project/rocket-simulation"
      img="https://res.cloudinary.com/dymfw7qfi/image/upload/v1663622669/OptimalThrustCurve.png"
      title="Rocket Simulation"
    >
      A suite of rocket simulation tools, developed for the Goddard rocketry team at Brazoswood. Pictures is the output of the thrust curve optimization simulation.
    </Project>
  );
}

export function NBASalaries() {
  return (
    <Project
      url="/project/nba-salaries"
      img="https://res.cloudinary.com/dymfw7qfi/image/upload/v1673231396/NetsNBASalaries.png"
      title="NBA Salaries"
    >
      Bronze medal machine learning, using random forest and KNN to predict NBA salaries.
    </Project>
  );
}

export function EarthQuakeData() {
  return (
    <Project
      url="/project/earthquake-data"
      img="https://res.cloudinary.com/dymfw7qfi/image/upload/v1584372006/screenshot-localhost_8000-2020.03.png"
      title="Earthquake Data"
    >
      An display of where earthquakes are in the world.
    </Project>
  );
}

export function SoccerXG() {
  return (
    <Project
      url="/project/soccer-xg"
      img="https://res.cloudinary.com/dymfw7qfi/image/upload/v1584372108/Annotation_2020-03-16_102126.png"
      title="Soccer Expected Goals"
    >
      A neural network based prediction of who will win soccer games.
    </Project>
  );
}

export function YouTubeHistory() {
  return (
    <Project url="/project/youtube-history" img="#" title="YouTube API">
      A visualization of views over time using YouTube's API.
    </Project>
  );
}

// Unity

export function Hybreeder() {
  return (
    <Project
      url="/project/hybreeder"
      img="https://img.itch.zone/aW1nLzE2NTIwMjUucG5n/315x250%23c/q3%2FYRP.png"
      title="Hybreeder"
    >
      A game built in Unity for the Github Game Off. It won third place for
      theme interpretation.
    </Project>
  );
}

export function Runing() {
  return (
    <Project
      url="/project/runing"
      img="https://img.itch.zone/aW1hZ2UvMzUxNTc1LzE3NTEzNjYucG5n/250x600/lh6jFT.png"
      title="The Runing"
    >
      A Unity puzzle game.
    </Project>
  );
}

export function Omitl() {
  return (
    <Project
      url="/project/omitl"
      img="https://res.cloudinary.com/dymfw7qfi/image/upload/v1584373017/screenshot-rkuhl.itch.io-2020.03.png"
      title="Omitl"
    >
      A Unity Ludum Dare Entry.
    </Project>
  );
}

export function TheGreatestSnowball() {
  return (
    <Project
      url="/project/greatest-snowball"
      img="https://res.cloudinary.com/dymfw7qfi/image/upload/v1584373100/screenshot-rkuhl.itch.io-2020.03_1.png"
      title="The Greatest Snowball"
    >
      A game jam entry.
    </Project>
  );
}

export function PowerOfMelody() {
  return (
    <Project
      url="/project/power-of-melody"
      img="https://res.cloudinary.com/dymfw7qfi/image/upload/v1584373167/screenshot-rkuhl.itch.io-2020.03_2.png"
      title="The Power of Melody"
    >
      A game jam entry.
    </Project>
  );
}

// Miscellaneous

export function ProgrammingLanguageCards() {
  return (
    <Project
      url="/project/programming-languages"
      title="Programming Language Cards"
    >
      Using Pug (Jade), I made a little website to help me verbalize the
      differences between programming languages. The hardest part was getting it
      to scroll sideways when the user scrolled vertically.
    </Project>
  );
}

export function MyBrotherSamIsDead() {
  return (
    <Project
      url="/project/my-brother-sam-is-dead"
      img="https://res.cloudinary.com/dymfw7qfi/image/upload/v1584373277/screenshot-rkuhl.itch.io-2020.03_3.png"
      title="My Brother Sam is Dead"
    >
      A Twine project converting the book <i>My Brother Sam is Dead</i> into a
      choose your own adventure story.
    </Project>
  );
}

export function NASAImages() {
  return (
    <Project
      url="/project/nasa-images"
      img="https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/potw2009a.jpg"
      title="NASA Images"
    >
      A chrome extension that changes your background to NASAs image of the day.
    </Project>
  );
}

export function CopyAndPaste() {
  return (
    <Project
      url="/project/copy-paste"
      img="https://www.sodapdf.com/blog/wp-content/uploads/2017/08/Cut-copy-and-paste-images.jpg"
      title="Copy Paste Memory"
    >
      A chrome extension that stores your most recent copies for later use.
    </Project>
  );
}

export function GithubProfile() {
  return (
    <Project
      url="/project/github"
      img="https://res.cloudinary.com/dymfw7qfi/image/upload/v1585837972/screenshot-github.com-2020.04.png"
      title="Github"
    >
      You can view my github profile here.
    </Project>
  );
}

export function StackEditContribution() {
  return (
    <Project
      url="/project/stackedit-contribution"
      img="https://res.cloudinary.com/dymfw7qfi/image/upload/v1585838071/screenshot-stackedit.io-2020.04.png"
      title="Stackedit"
    >
      You can view my contribution to stackedit here
    </Project>
  );
}

// Math
export function Heart() {
  return (
    <Project
      url="/project/heart"
      img="https://res.cloudinary.com/dymfw7qfi/image/upload/v1586087200/MathematicalHeart.gif"
      title="Mathematical Heart"
    >
      
      A heart that I drew using a mathematical equation.
    </Project>
  );
}

// Engineering
export function RocketEngine() {
  return (
    <Project
      url="/project/rocket-engine"
      img="https://res.cloudinary.com/dymfw7qfi/image/upload/v1668995752/RocketLaunch.png"
      title="Rocket Engine Design"
    >
      The design and construction of a world-record hybrid rocket engine.
    </Project>
  );
}

export function OxidizerStand() {
  return (
    <Project
      url="/project/oxidizer-stand"
      img="https://res.cloudinary.com/dymfw7qfi/image/upload/v1673195252/LoadedTank.jpg"
      title="Oxidizer Stand"
    >
      Embedded and mechanical engineering project for rocket ground systems. 
    </Project>
  );
}

// Display a project in a list of projects.
function Project(props) {
  return (
    <div>
      <div>
        <Link className="no-underline" to={props.url}>
          <h3 className="title-font white-text no-underline">{props.title}</h3>
        <img
          className="project-thumbnail"
          src={props.img}
          alt="project thumbnail"
        />
        {/* This is the caption, effectively. */}
        {props.children}
        </Link>
      </div>
    </div>
  );
}

export default Project;
