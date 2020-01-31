import React, { useState } from 'react'

const Component = (props) => (
  <div className={props.name}>{props.children}</div>
);

const App = (props) => {
  return (
    <Component name="Comment">
      <Component name="UserInfo">
        <img
          className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <Component name="UserInfo-name">
          {props.author.name}
        </Component>
      </Component>

      <Component name="Comment-text">
        {props.text}
      </Component>
      <Component name="Comment-date">
        {formatDate(props.date)}
      </Component>
    </Component>
  )
}

export default App;
