import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BackButton from "./helpers/BackButton";
import HomeButton from "./helpers/HomeButton";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Achievements from "./pages/Achievements";
import Achievement from "./pages/Achievement";
import Skill from "./pages/Skill";

export default function App() {
  return (
    <Router>
      <div className="App noselect">
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/experience">
          <Experience />
        </Route>

        <Route path="/projects">
          <Projects />
        </Route>

        <Route path="/achievements">
          <Achievements />
        </Route>

        <Route path="/achievement/:name" component={Achievement} />

        <Route path="/project/:name" component={Project} />

        <Route path="/skill/:name" component={Skill} />

        <div>
          <BackButton />
          <HomeButton />
          {/* TODO: add a mail button that takes you to the contact page. */}
        </div>
      </div>
    </Router>
  );
}
