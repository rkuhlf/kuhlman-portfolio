import React from "react";
import Title from "./Title";

// this is a list of all of my projects so that I can just import the ones I want

// Other Portfolios
export function CodePenPortfolio() {
  return (
    <Project
      url="https://codepen.io/rilstar/pen/EXEmVz"
      img="https://res.cloudinary.com/dymfw7qfi/image/upload/v1584321776/screenshot-codepen.io-2020.03.png"
      title="Code Pen Portfolio"
    >
      This is a portfolio that I wrote in plain javascript and css on CodePen.
      It is probably my best attempt at writing my own CSS, and it uses no
      libraries. I wrote the code when I was about 14.
    </Project>
  );
}

export function WeeblyPortfolio() {
  return (
    <Project
      url="https://programmingresume.weebly.com/"
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
      url="https://jjntx.csb.app/"
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
      url="https://jjntx.csb.app/"
      img="https://res.cloudinary.com/dymfw7qfi/image/upload/v1586005385/MedusaDrawing.png"
      title="Medusa"
    >
      This is a chibi Medusa that I drew for fun with some colored pencils.
    </Project>
  );
}

export function Well() {
  return (
    <Project
      url="https://jjntx.csb.app/"
      img="https://res.cloudinary.com/dymfw7qfi/image/upload/v1586005562/Well.png"
      title="Well"
    >
      This is a 3D well that I modeled in Blender. I followed
      https://www.youtube.com/watch?v=OlnkGCdtGEw, but I added some of my own
      models.
    </Project>
  );
}

// Python Programs

export function PictureOfPictures() {
  return (
    <Project
      url="https://github.com/rkuhlf/picture-of-pictures"
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
      url="https://github.com/rkuhlf/word-game"
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
      url="https://stackblitz.com/edit/react-dice-simulator"
      img="https://res.cloudinary.com/dymfw7qfi/image/upload/v1584359907/screenshot-react-dice-simulator.stackblitz.io-2020.03.png"
      title="Dice Simulator"
    >
      I built this project to help me visualize my odds when rolling variable
      numbers of dice. It uses bootstrap so that I could focus on implementing
      the graph well. I am pretty happy with it but I hope to eventually
      redesign it so that the dice roll is centered and prominent.
    </Project>
  );
}

export function LinkShortener() {
  return (
    <Project
      url="https://react-lnk-shrtner.stackblitz.io/"
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
      url="http://prospect-theory.herokuapp.com/"
      img="https://res.cloudinary.com/dymfw7qfi/image/upload/v1584360308/screenshot-prospect-theory.herokuapp.com-2020.03.png"
      title="Prospect Theory"
    >
      I programmed and published a comprehensive explanation of the economic
      principle of Prospect Theory using React and Heroku. This is one of the
      most ambitious projects that I have ever finished, and I like to thing
      that it has the most advanced prospect theory calculator on the internet.
    </Project>
  );
}

export function ProCons() {
  return (
    <Project
      url="https://procons.herokuapp.com/"
      img="https://res.cloudinary.com/dymfw7qfi/image/upload/v1591564795/ScreenShotOfProsCons.png"
      title="Pro Cons"
    >
      I usually struggle to make big decisions, so I decided to build a tool to
      help me analyze things more objectively. Using react, I made a pretty
      simple website that allows you to input a number of pros and cons, give
      them weights, and try to find the best option.
    </Project>
  );
}

export function ChemistryClicker() {
  return (
    <Project
      url="https://nspty.csb.app/"
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
      url="https://xizfj.csb.app/"
      img="https://res.cloudinary.com/dymfw7qfi/image/upload/v1584360660/screenshot-nspty.csb.app-2020.03.png"
      title="Idea Generator"
    >
      I built this website to help me come up with ideas for websites to make
      and new games to build. This was one of the more complex react projects
      that I built, because I ended up adding a kind of text editor and compiler
      to use content editables and react components. I used localstorage for the
      backend (like most of my projects), and I'm pretty happy with it.
    </Project>
  );
}

// Backend

export function ChatApp() {
  return (
    <Project
      url="https://chattax.herokuapp.com/"
      img="https://res.cloudinary.com/dymfw7qfi/image/upload/v1584371653/screenshot-chattax.herokuapp.com-2020.03.png"
      title="Chattax"
    >
      I built a chat app using node and socket.io to figure out the basics of
      backend programming.
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
      url="http://mathematical-gerrymandering.weebly.com/interactive-example.html"
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

export function EarthQuakeData() {
  return (
    <Project
      url="https://github.com/rkuhlf/GeographicData"
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
      url="https://github.com/rkuhlf/soccer-xg"
      img="https://res.cloudinary.com/dymfw7qfi/image/upload/v1584372108/Annotation_2020-03-16_102126.png"
      title="Soccer Expected Goals"
    >
      A neural network based prediction of who will win soccer games.
    </Project>
  );
}

export function YouTubeHistory() {
  return (
    <Project
      url="https://github.com/rkuhlf/YouTubeHistory"
      img="#"
      title="YouTube API"
    >
      A visualization of views over time using YouTube's API.
    </Project>
  );
}

// Unity

export function Hybreeder() {
  return (
    <Project
      url="https://github.com/rkuhlf/hybreeder"
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
      url="https://github.com/rkuhlf/the-runing"
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
      url="https://rkuhl.itch.io/omitl"
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
      url="https://rkuhl.itch.io/the-greatest-snowball"
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
      url="https://rkuhl.itch.io/the-power-of-melody"
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
      url="http://programminglanguages.surge.sh/"
      img=""
      title="Programming Language Cards"
    >
      Learning the history of programming languages has always been fascinating
      for me. Using Pug (Jade) and SASS, I built this little website over the
      weekend and deployed it with Surge. I ran into some difficulty because I
      wanted the page to scroll sideways while the user scrolled down, but using
      some vanilla Javascript I was able to implement the feature.
    </Project>
  );
}

export function MyBrotherSamIsDead() {
  return (
    <Project
      url="https://rkuhl.itch.io/my-brother-sam-is-dead"
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
      url="https://github.com/rkuhlf/NASAImages"
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
      url="https://github.com/rkuhlf/Copy-and-Paste-Memory"
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
      url="https://github.com/rkuhlf/"
      img="https://res.cloudinary.com/dymfw7qfi/image/upload/v1585837972/screenshot-github.com-2020.04.png"
      title="Github"
    >
      You can view my github profile here. I have been active off and on for the
      past couple of years, and I have some minor experience using other git
      clients like Bitbucket.
    </Project>
  );
}

export function StackEditContribution() {
  return (
    <Project
      url="https://github.com/benweet/stackedit/pull/1469"
      img="https://res.cloudinary.com/dymfw7qfi/image/upload/v1585838071/screenshot-stackedit.io-2020.04.png"
      title="Stackedit"
    >
      This is the first contribution I ever made to a repository that wasn't
      mine. I had been using Stackedit on my phone, but the scrolling wasn't
      working correctly. I knew it was open source, so I made a pull request,
      and when it was finally merged, I could finally scroll easily.
    </Project>
  );
}

// Math
export function Heart() {
  return (
    <Project
      img="https://res.cloudinary.com/dymfw7qfi/image/upload/v1586087200/MathematicalHeart.gif"
      title="Mathematical Heart"
    >
      This is a heart that I drew with a library called{" "}
      <a
        className="white-text"
        href="https://github.com/3b1b/manim"
        target="_blank"
      >
        manim
      </a>
      . I extended the library to include polar graphs, and then I developed a
      function that would give me a heart shape.
    </Project>
  );
}

// this is the code for displaying a project in a list

function Project(props) {
  return (
    <div>
      <Title>{props.title}</Title>
      <div className="about-text">
        <img
          className="project-thumbnail"
          src={props.img}
          alt="project thumbnail"
        />
        {props.url && (
          <a className="sub-link" target="_blank" href={props.url}>
            View the Project
          </a>
        )}

        {props.children}
      </div>
    </div>
  );
}

export default Project;
