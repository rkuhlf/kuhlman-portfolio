import React, { Component } from "react";
import { Link } from "react-router-dom";
import Title from "../helpers/Title";

class About extends Component {
  render() {
    return (
      <div>
        <Title>About</Title>
        <div className="about-text">
          Hi, I'm Riley Kuhlman. I've been programming off and on ever since I
          was 14 years old. I started learning on Khan Academy, and once I
          finished the course there I moved to YouTube courses. I really enjoyed
          following along with Daniel Shiffman's tutorials. I've dabbled in lots
          of different languages, but the ones I always come back to are
          Javascript and Python.
        </div>
      </div>
    );
  }
}

export default About;
