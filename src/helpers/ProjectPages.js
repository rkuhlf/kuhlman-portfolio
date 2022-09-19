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
      attempts to replicate a target picture with them. I scaled down the base images using skimage, then I 
      looped through the large image, selecting the least different base image and stitching it into the larger final image.
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
      try to find three letter words in a grid. It uses a .txt of three letter words, comparing each user input to all of the words to see if they guessed successfully. Although the game itself could use some additional features, the user interface is well-polished and the program runs without bugs.
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
      url="http://prospecttheory.vercel.app/"
      img="https://res.cloudinary.com/dymfw7qfi/image/upload/v1584360308/screenshot-prospect-theory.herokuapp.com-2020.03.png"
      title="Prospect Theory"
    >
      I programmed and published a comprehensive explanation of the economic
      principle of Prospect Theory using React and Heroku. This is one of the
      most ambitious projects that I have ever finished, and I like to think
      that it has the most advanced prospect theory calculator on the internet.

      Prospect theory stems from a relatively simple criticism of traditional economics: people are not rational (at least not in the way economists often assume). People are not very good at thinking about high or low probabilities. People do not value their money proportionally to the amount they have. People <i>really</i> do not like to lose money. Prospect theory is not particularly well-explained online, with an extremely technical Wikipedia page and several research publications serving as the main sources if you care more than the very basics. Hopefully, my website can offer an alternative source that bridges the gap between pointlessly difficult to read and actual interesting information.
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
      One of my first projects in React was a little clicker game about building as much plastic as you can. I used Flaticon for the art and tried to make a little more interesting than the traditional cookie clicker style idle games. Each resource beyond sunlight requires some previous resource, forcing the player to balance their production well. Although it's a simple concept, the snappy UI and slight strategy make it pretty fun (in my opinion).
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

export function RocketSimulation() {
  return (
    <Project
      url="https://github.com/rkuhlf/rocket-simulation"
      img="https://res.cloudinary.com/dymfw7qfi/image/upload/v1663622669/OptimalThrustCurve.png"
      title="Rocket Simulation"
    >
      As dynamics lead of the Goddard rocketry team (~20 people), I was in charge of predicting the flight and stability of our rocket, along with two others. Although there are third party solutions, developing an in-house solution, using Python has some advantages.

      I was able to implement parameter sensitivity testing, so I could report to the lead engineer exactly how much difference it would make to increase the diameter of our rocket by a quarter of an inch as opposed to changing the weight by ten pounds. I created Monte Carlo testing, presenting a distribution of possible outcomes at our preliminary and critical design reviews.
      
      I also created a custom simulation of the engine, which is a piece of software that is difficult to get right and is not really offered for free by any third parties. Once again, I implemented parameter sensitivity testing and Monte Carlo simulation to give us a range of results, and those findings instructed the propulsion team in how to best design the motor.

      We flew successfully in June of 2022 at the missile range in White Sands, verifying the accuracy of the simulation to within 5%. The team remains the world record holder for apogee of a high school rocket, flying to 45,000' and nearly twice the speed of sound. You can read more about us{" "}<a
        className="white-text"
        href="https://sites.google.com/student.brazosportisd.net/goddard2022."
        target="_blank"
      >
        on our website
      </a> 
      {" "}(I wrote most of this too, but we used Google Sites for easy collaboration).
    </Project>
  );
}

export function EarthQuakeData() {
  return (
    <Project
      url="https://github.com/rkuhlf/GeographicData"
      img="https://res.cloudinary.com/dymfw7qfi/image/upload/v1584372006/screenshot-localhost_8000-2020.03.png"
      title="Earthquake Data"
    >
      A display of where earthquakes are in the world.
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
      I built Hybreeder in thirty days using Unity for the Github Game Off. It won third place in 
      theme interpretation, and is probably the most fun game that I have made. It's a pretty intuitive sandbox breeding game (think Cow Evolution), where you can breed different animals to make random combinations of offspring.

      Frankly, the main reason that I am proud of Hybreeder is that it is the first time I planned a project well. Given thirty days to make a game, I would usually underplan, overscope, and burn out within a week. However, this time I was able to focus on the necessary features at the beginning and save the polishing until the end, giving me a decently fun final product.
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
      This is the first contribution I ever made to an open source piece of software. I had been using Stackedit on my phone, but smooth scrolling was strangely disabled on mobile. I took a look at the repository and did some Googling, and it turned out to be a relatively easy fix. Once implemented, I made a pull request and could finally scroll easily.
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
