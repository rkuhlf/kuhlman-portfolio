import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

// try and get at least three projects for each category

// include downloadable python projects
// https://github.com/rkuhlf/picture-of-pictures
// https://github.com/rkuhlf/word-game

// include react projects
// https://stackblitz.com/edit/react-dice-simulator
// https://stackblitz.com/edit/react-lnk-shrtner
// http://prospect-theory.herokuapp.com/
// https://codesandbox.io/s/chemistry-clicker-nspty

// backend
// https://chattax.herokuapp.com/
// add treedolist when finished

// include p5js projects
// http://mathematical-gerrymandering.weebly.com/interactive-example.html
// look on old computer

// Miscellaneous
// https://rkuhl.itch.io/my-brother-sam-is-dead
// https://github.com/rkuhlf/NASAImages
// https://github.com/rkuhlf/Copy-and-Paste-Memory

// Have a home page
// On the home page it says my name
// Make it like an rpg viewer
// follow this example https://pbs.twimg.com/media/DYXZU-eUQAAz1Kv.png
// Say programmer for class name
// have skill bars instead of numbers
// clicking on a skill takes you to a page about that skill
// Allow clicking on experience to take you to a page about my work experience
// add achievements so that there are two columns
// you can click on the achievement subtitle and it takes you to a page,
// but you can also see my best achievement under it
//        | achievements
// skills |
//        | projects

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);

const eles = document.getElementsByClassName("typewriter");
const texts = [];

for (let i = 0; i < eles.length; i++) {
  texts[i] = eles[i].innerText;
  eles[i].innerText = "";
}

let count = 0;

let typeWriter = window.setInterval(() => {
  let editedOne = false;
  count++;
  for (let i = 0; i < eles.length; i++) {
    try {
      if (count <= texts[i].length) {
        if (
          eles[i].innerText.length !== 0 &&
          eles[i].innerText[0] !== texts[i][0]
        ) {
          throw "Changed Page";
        }
        eles[i].innerText = texts[i].substr(0, count);
        editedOne = true;
      }
    } catch {
      editedOne = false;
      break;
    }
  }
  if (!editedOne) {
    window.clearInterval(typeWriter);
  }
}, 50);
