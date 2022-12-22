import React, { Component } from "react";

export function Title(props) {
  return <div className="title-container">
      <h2 className="title">{props.children}</h2>
    </div>
}

export function SubTitleNoLink(props) {
  return <h2 className="title-font white-text no-underline">{props.children}</h2>
}

export function SubTitle(props) {
  if (props.href) {
    return <a className="block no-underline" href={props.href}>
        <SubTitleNoLink>{props.children}</SubTitleNoLink>
      </a>
  }

  return <SubTitleNoLink>{props.children}</SubTitleNoLink>
}
