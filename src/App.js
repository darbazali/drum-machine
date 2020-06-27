import React from "react";
import { render } from "react-dom";
import DrumpadApp from "./Drumpad";
import Drumpad2 from "./Drumpad2";

const App = () => {
  return (
    <div>
      {/* <DrumpadApp /> */}
      <Drumpad2 />
    </div>
  );
};

render(<App />, document.getElementById("root"));
