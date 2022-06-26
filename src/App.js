import React from "react";
import { render } from "react-dom";

const App = () => {
  return <h1>Yell-o</h1>
};

render(React.createElement(App), document.getElementById("root"));
