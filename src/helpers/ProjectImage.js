import React from "react";


function ProjectImage(props) {


    return <div className="project-image">
        {<div className="image-title">
            {props.title}
        </div> || ""}

        <img src={props.src} />

        {<div className="image-caption">
            {props.caption}
        </div> || ""}
    </div>
}

export default ProjectImage;