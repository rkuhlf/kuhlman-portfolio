import React, { Component } from "react";
import { Link } from "react-router-dom";

class Achievement extends Component {
  render() {
    return (
      <div>
        <h3>
          <Link
            className="title-font white-text no-underline"
            to={this.props.linkTo}
          >
            {this.props.title}
          </Link>
        </h3>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default Achievement;
