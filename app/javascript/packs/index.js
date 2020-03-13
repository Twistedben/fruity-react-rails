import React from "react";
import ReactDOM from "react-dom";
import Users from "../components/Users";

const Index = props => {
  return (
    <div>
      <Users />
    </div>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Index />, document.getElementById("users"));
});
