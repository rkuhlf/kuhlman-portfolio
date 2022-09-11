import React from "react";
import { Link } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HomeButton(props) {
  return (
    <Link className="black-text top-right" to="/">
      <div className="btn">
        <FontAwesomeIcon icon={faHome} />
      </div>
    </Link>
  );
}

export default HomeButton;
