import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import App from "../App";

test("<App /> without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  // render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});

test("<App /> matches snapshot", () => {
  expect(render(<App />)).toMatchSnapshot();
});
