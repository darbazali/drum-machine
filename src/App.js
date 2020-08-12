import React from "react";
import { render } from "react-dom";
import Drumpad from "./components/Drumpad";

const App = () => {
  return (
    <div>
      <Drumpad />
    </div>
  );
};

render(<App />, document.getElementById("root"));
