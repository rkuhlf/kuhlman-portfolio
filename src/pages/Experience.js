import React, { Component } from "react";
import { Link } from "react-router-dom";
import Title from "../helpers/Title";

class Experience extends Component {
  render() {
    const years_programming = new Date().getFullYear() - 2017;

    return (
      <div className="scrollable">
        <Title>Experience</Title>
        <div className="about-text">
          I have {years_programming} years of experience programming, split pretty evenly between front-end development and numerical / algorithm-based projects. I have some experience with data science - I developed an analysis of NBA salaries and a soccer goals predictor - and I am familiar with basic machine learning concepts.

          <br />
          <br />

          I have a decent chunk of experience volunteering. I spent two summers at the local library in Lake
          Jackson, working to help shelve books and help people find what they need. I have also volunteered for the high school soccer team as a ballboy, as well as working the concession stand. I was parliamentarian of the Spanish Honor Society (working to organize volunteer activities), and I was a math tutor for my last two years of high school.
        </div>
      </div>
    );
  }
}

export default Experience;
