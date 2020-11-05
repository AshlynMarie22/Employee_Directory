import React from "react";
import "./style.css";

function Title(props) {
  return (
    <div className="title">
      <h1>{props.children}</h1>
      <p>
        Click on name to sort by first name or use the search box to narrow your
        results.
      </p>
    </div>
  );
}

export default Title;
