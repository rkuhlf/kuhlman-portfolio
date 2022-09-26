import React, { Component } from "react";
import { Link } from "react-router-dom";
import Title from "../helpers/Title";

class About extends Component {
  render() {
    return (
      <div>
        <Title>About</Title>
        <div className="about-text">
          Hi, I'm Riley Kuhlman. I've been programming off and on since I was 14 years old. I started learning on Khan Academy and YouTube (I really enjoyed following along with Daniel Shiffman's tutorials), then took a few classes in high school. I continued learning by joining a few clubs, finishing fourth at State in 2021 with the CS UIL team and writing a Python simulation for my rocketry team.

          I currently attend Rice University, where I am majoring in computer science. I am a member of Rice Eclipse, where I have CAD-ed most of the test stand for the Proxima hybrid engine and am working towards my L1 certification. I run on the varsity cross country team, and I enjoy grinding on LeetCode before I get my morning run in.

          I've dabbled in many languages, but I typically come back to Javascript and Python. Javascript is ubiquitous, and I love making websites that other people can actually see and use. I enjoy writing code in Python, as I find it the easiest way to transform my ideas into code. If I ever need to write anything fast, I am proficient in Java (although it isn't my favorite), and I have a bit of experience solving algorithms in C.
        </div>
      </div>
    );
  }
}

export default About;
