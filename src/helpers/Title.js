import React, { Component } from "react";

class Title extends Component {
  render() {
    return (
      <div className="title-container">
        <h2 className="title">{this.props.children}</h2>
      </div>
    );
  }
}

export default Title;
