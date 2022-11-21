import React from "react";
import Title from "./Title";

// TODO: try and find some of those pixel art animations that I spent so long working on when I was making that boss-battler rogue-like

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
      This is a programming project portfolio that I built using Weebly and some custom css. I like to keep the older versions of portfolios with me so that I can see how I develop as a program and ensure that I never lose a project.
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
      This is my art portfolio. I built it using React and codesandbox, and it shows the illustrations, pixel art, and 3D models that I am most proud of. It isn't always necessary for my projects to have art, but I like to think that I can get it done (or at least make a workable prototype) when necessary.
    </Project>
  );
}

// Art
export function Modeling() {
  return (
    <Project
      url="https://rkuhlf-assets.itch.io/"
      img="https://res.cloudinary.com/dymfw7qfi/image/upload/v1667685448/Food.png"
      title="3D Modeling"
    >
      The summer of Covid, I took up 3D modeling as a hobby. With Blender as my weapon of choice, I published several asset packs to <a target="_blank" className="white-text" href="https://rkuhlf-assets.itch.io/">my itch.io page</a>, featuring animated marine and ice age animals, a snail, and a ton of food. Since then, I have collected over 8,000 views and 2,500 downloads, giving a little back to the game-making community that has given so much to me.
      <br />

      <a href="https://rkuhlf-assets.itch.io/aquatic-animal-models">
        <img src="https://res.cloudinary.com/dymfw7qfi/image/upload/v1667686284/Shark.png" />
      </a>
      My first real project was a collection of low-poly marine animals, each animated to be idle and moving. It got way more traction than I expected, which inspired me to keep going.

      <a href="https://rkuhlf-assets.itch.io/ice-age">
        <img src="https://res.cloudinary.com/dymfw7qfi/image/upload/v1667686201/Mammoth.png" />
      </a>
      I followed it up with a set of animals from the Ice Age. I liked thinking about Sid the sloth and Manny the mammoth of the wonderful Ice Age movies, but I tried to make it a little more proportionally realistic.

      <a href="https://rkuhlf-assets.itch.io/classical-paintings">
        <img src="https://res.cloudinary.com/dymfw7qfi/image/upload/v1667686454/Adam.png" />
      </a>
      Eventually, I branched out in pixel art. I made a set of replica portraits, trying to capture the sense provided by each famous painting.


      <a href="https://rkuhlf-assets.itch.io/low-poly-shields">
        <img src="https://res.cloudinary.com/dymfw7qfi/image/upload/v1667686421/Shields.png" />
      </a>
      In an attempt to making something that would be a little more niche, I came up with a set of shields. Each one had its own design, and I had a ton of fun picking and choosing the aesthetics.

      <a href="https://www.artstation.com/artwork/ZG0Vww">
        <img src="https://res.cloudinary.com/dymfw7qfi/image/upload/v1667686741/riley-kuhlman-final.png" />
      </a>
      My ultimate project was a massive fire-breathing dragon. I was determined to finally successfully venture out of the realm of low-poly assets and into art that just looks cool. Dragons are just about the coolest thing I know, so I went with that.

    </Project>
  );
}

export function Medusa() {
  return (
    <Project
      url="https://jjntx.csb.app/"
      img="https://res.cloudinary.com/dymfw7qfi/image/upload/v1586005385/MedusaDrawing.png"
      title="Medusa"
    >
      This is a chibi Medusa that I drew for fun with some colored pencils. It was concept art for a boss-based rogue-like that I spent about a month working on that eventually came to nothing.
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
      The displayed picture is a 3D well that I modeled in Blender, taken from my art portfolio website. I followed tutorials for some parts, but I always try to add a spin to make the project really feel like it is mine. 
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
      API and Bootstrap for the styling.
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
      backend programming. It is deployed with Heroku, but I am most proud of the display. It looks pretty nice.
    </Project>
  );
}

// Unfinished
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
      For my first ever numerical analysis project, I attempted to quantify gerrymandering. I considered the shape of the county, but I placed more emphasis on the actual misrepresentation that gerrymandering can promote. Working in Weebly, I wrote a description of the kinds of gerrymandering that are common in the American political system, and I gave a few fun facts about the history. The centerpiece is a p5js canvas embedded within a website. It shows how gerrymandering works and offers a button to optimize gerrymandering for any situation, using brute-force to come up with the most gerrymandered arrangement possible.
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

      <br />
      <br />

      I was able to implement parameter sensitivity testing, so I could report to the lead engineer exactly how much difference it would make to increase the diameter of our rocket by a quarter of an inch as opposed to changing the weight by ten pounds. I created Monte Carlo testing, presenting a distribution of possible outcomes at our preliminary and critical design reviews.

      <br />
      <br />
      
      I also created a custom simulation of the engine, which is a piece of software that is difficult to get right and is not really offered for free by any third parties. Once again, I implemented parameter sensitivity testing and Monte Carlo simulation to give us a range of results, and those findings instructed the propulsion team in how to best design the motor.

      <br />
      <br />

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

// TODO: Elaborate
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
      A neural network based prediction of who will win soccer games. Using data from{" "}<a href="https://www.kaggle.com/hugomathien/soccer">Kaggle</a>{" "}, I combined my interests in Python and soccer to try to figure out what makes teams more likely to win. I used Tensorflow and a pretty small neural network (it turns out to be pretty hard to predict sports), but I was happy with the project.
    </Project>
  );
}

// TODO: update this one to actually work and then get an image of it
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
      In an effort to round out the genre of games I have experience working, I created The Runing. I enjoyed the process of thinking of outside-the-box solutions, then coming up with puzzles that required them. It features a variety of interactions that the player can trigger using four elemental spells.

      Written in Unity and coded in C#, it is a tricky little puzzle game that is pretty fun.
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
      Omitl, meaning bone in Nahuatl, is my most recent Ludum Dare Entry. Once again, it is written in Unity using C#, made over the course of two days. I made the art in Krita and the music in Bosca Ceoil.

      This time, I think I actually managed to end up with a game that is a little bit fun and requires a little bit of skill. You run around, slashing away at more and more skeletons, until eventually you die. It's pretty cool.
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
      During my game jam phase, I did a few non-Ludum Dare jams. The Greatest Snowball is my submission to the TV Game Jam, and is one of my best games. It is themed from The Office, based loosely on the episode that shares the name.

      In effect, you run around hitting people with snowballs, picking from upgrades as you go. Hopefully, it has something of an arcade-y feel. Once again, it was written in C#, drawn in Krita, and put together using Unity.
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
      Power of Melody was developed for a week long game jam and was my attempt to put a fun spin on parkour games. Built in Unity using C#, it is one of my better games, featuring several levels, a neat soundtrack, and a fun atmosphere.
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
      choose your own adventure story filled with alternate realities. Twine handles most of the heavy lifting, but I programmed music into the background, added some custom effects to decision-making, and created some complicated alternate pathways. It was quite fun, and I recommend Twine to anyone interested in choose your own adventure stories.
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
      I wrote several chrome extensions for personal use around 2020, both to practice my JavaScript and to experiment with a new development environment. This one changes your background to NASA's image of the day.
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
      I wrote several chrome extensions for personal use around 2020, both to practice my JavaScript and to experiment with a new development environment. This is a chrome extension that stores the items you copied most recently for later use (now made defunct by windows-V, which is awesome). 
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
      clients like Bitbucket. I find it to be the easiest way to do version control, but I sometimes I use it just so that I can work on the same project on multiple computers.

      Over the years, my documentation skills have improved, and so has my project organization. My Github is filled with half-finished projects, but Hybreeder, Prospect Theory, and this website are all pretty easy to look through.
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
      I love math, and I have been a massive fan of 3blue1brown for quite some time. In his YouTube videos, he uses a Python library that he developed, <a
        className="white-text"
        href="https://github.com/3b1b/manim"
        target="_blank"
      >
        manim
      </a>, to generate animations that explain mathematical concepts. I took it upon myself to learn the library, combing through the code base to make up for the lack of documentation, and I made a couple small videos demonstrating concepts.
      <br />
      Pictured is a heart that is drawn using a mathematical equation. I extended the library to include polar graphs, and then I developed a function that would output a heart shape.
    </Project>
  );
}

// Engineering
// TODO: add one or two CAD pictures
export function RocketEngine() {
  return (
    <Project
      img="https://res.cloudinary.com/dymfw7qfi/image/upload/v1668995752/RocketLaunch.png"
      title="Design of a Hybrid Rocket Engine"
    >
      Working on {" "}<a
        className="white-text"
        href="https://sites.google.com/student.brazosportisd.net/goddard2022."
        target="_blank"
      >
        the Brazoswood Goddard 2022 rocketry team
      </a> 
      {" "} (for which I also wrote {" "}<a
        className="white-text"
        href="https://sites.google.com/student.brazosportisd.net/goddard2022."
        target="_blank"
      >
        a simulation script
      </a> ), I designed a successful hybrid rocket engine. It output an estimated 1200 lbs of force for 15 seconds, boosting the rocket to 43,300 ft AGL and a world record for high school hybrid rocketeers. It was the culmination of a year of hard work and research, bringing newfound CAD, machining, chemistry, and structural analysis knowledge together to make a world-class aircraft.

      <br />
      <br />

      The engine starts with pressure swirl vortex (PSV) injectors, designed by Cristian Finley, which spray the oxidizer down the fuel grain. The special nozzle was an innovative addition to the rocket, improving the atomization of the oxidizer (which improves the combustion efficiency) and adding a centripetal component to the flow through the engine (which increased the regression rate).
      
      <br />
      <br />


      <img src="https://res.cloudinary.com/dymfw7qfi/image/upload/v1668996663/Ablative.jpg" />

      The pre-combustion chamber, three inches long to further allow the oxidizer to atomize, was encased by a homemade ablative designed by Kyle Evangelista and Josh Watson. Formed from a mixture of uncured epoxy and magnesium sulfate, it easily prevented the ~4000 F combustion from burning through the walls of the combustion chamber. We formed it with custom 3D printed molds and attached it butting up against the injector face. It was surrounded by an aluminum coupler to make it easier to attach to the injector bulkhead.

      <br />
      <br />

      We made the post-combustion chamber the exact same way that we made the pre-combustion chamber, but with a different mold. This mold was seven inches long (to give any unburned fuel particles time to combust) and had a ledge to fit in with our nozzle retention ring.

      <br />
      <br />

      The phenolic cloth formed the main body of the combustion chamber, extending about three feet and wrapping around the fuel grain. Phenolic is a thermoset plastic, so it chars away when exposed to heat (just like our ablative). That prevented any gaps in our combustion chamber from being exposed to the carbon fiber outermost shell of the rocket.

      <br />
      <br />

      The nozzle retention ring coupler is the bottom-most component of our rocket's shell. Made of steel, it prevented the heat of the nozzle from melting anything away, while making it easier to bolt through. It coupled to the retention ring, a thick piece of aluminum that had radial bolt holes to go through the retention ring coupler. This piece looked a little melty afterwards, but it survived the trip and kept the nozzle and the rest of the combustion chamber inside of the rocket.

      <br />
      <br />

      <img src="https://res.cloudinary.com/dymfw7qfi/image/upload/v1668996371/AftOverwrap.jpg" />

      We glued everything together with a carbon fiber overwrap, which extended from the very bottom of the retention ring coupler to the very top of the aluminum coupler next to the injectors. Jacob Markham led the way in gently wrapping four layers of carbon fiber around everything, painting it continuously with epoxy to ensure that it set tightly against the airframe without any bubbles. 

      <br />
      <br />

      <img src="https://res.cloudinary.com/dymfw7qfi/image/upload/v1668995761/WebRocketReveal_2.jpg" />

      Obviously, the final product was incredibly cool. However, the skills I developed and the things I learned will last me for a lifetime. I spent one year of my life trying to become an expert on the chemistry of combustion and building structures that survive combustion. Through experience I learned that it is necessary to read datasheets and distrust precedents (otherwise your roofing rubber will not cure in time). I learned how to connect and seal a combustion chamber with O-rings, gasket markers, and jigs to align radial bolts. The trickiest thing that I started to understand is definitely tolerances. With so many parts interlocking, it is important to consider where the gaps in a design are at every step in the process, and look at the component as a whole to determine where they add up. Otherwise you are going to have to re-drill a lot of holes. I had a blast building a rocket, and I learned a lot too.

      <img src="https://res.cloudinary.com/dymfw7qfi/image/upload/v1668996113/AtWhiteSands.jpg" />
    </Project>
  );
}


export function NozzleDesign() {
  return (
    <Project
      img="https://res.cloudinary.com/dymfw7qfi/image/upload/v1668996446/Nozzle.jpg"
      title="Design of a Rocket Nozzle"
    >
      
    </Project>
  );
}


export function Machining() {
  return (
    <Project
      img=""
      title="Machining"
    >
      {/* https://res.cloudinary.com/dymfw7qfi/image/upload/v1668516047/MachinedUpperHead.jpg */}
      {/* https://res.cloudinary.com/dymfw7qfi/image/upload/v1668996446/Nozzle.jpg */}
    </Project>
  );
}


// this is the code for displaying a project by itself on a page

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
