import React, { Component } from "react";
import { Link } from "react-router-dom";
import Title from "../helpers/Title";

class Experience extends Component {
  render() {
    return (
      <div>
        <Title>Experience</Title>
        <div className="about-text">
          I have volunteered for two summers at the local library in Lake
          Jackson, working to help shelve books and help people find what they
          need. I have also volunteered for the highschool soccer team as a
          ballboy and to work the concession stand. Unfortunately, I have no
          paid job experience yet, but I'm eager to start.
        </div>
      </div>
    );
  }
}

export default Experience;
