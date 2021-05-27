// import { render } from "@testing-library/react";
import React, { Component } from "react";
import ReactDOM from "react-dom";
// import { renderIntoDocument } from "react-dom/test-utils";

class Hello extends React.Component {
  render() {
    return <h1>Hello</h1>;
  }
}

class World extends React.Component {
  render() {
    return <p>World</p>;
  }
}

class HelloWorld extends React.Component {
  render() {
    return (
      <section>
        <Hello />
        <World />
      </section>
    );
  }
}

ReactDOM.render(<HelloWorld />, document.getElementById("root"));
