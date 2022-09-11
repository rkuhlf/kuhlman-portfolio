import React from "react";
import { useHistory } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BackButton(props) {
  let history = useHistory();

  return (
    <div className="btn top-left" onClick={history.goBack}>
      <div>
        <FontAwesomeIcon icon={faArrowLeft} />
      </div>
    </div>
  );
}

export default BackButton;
