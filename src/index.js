import React from "react";
import ReactDOM from "react-dom";
let greeting = "";
const cStyle = {};
let curdate = new Date().getHours();
if (curdate >= 1 && curdate < 12) {
  greeting = "GOOD MORNING!";
  cStyle.color = "red";
} else if (curdate >= 12 && curdate < 19) {
  greeting = "GOOD AFTERNOON!";
  cStyle.color = "green";
} else {
  greeting = "GOOD NIGHT!";
  cStyle.color = "blue";
}

ReactDOM.render(
  <>
    <h1>
      Hello sir ,<span style={{ color: cStyle.color }}>{greeting}</span>
    </h1>
  </>,
  document.getElementById("root")
);
