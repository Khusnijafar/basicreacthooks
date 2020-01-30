import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HookCounter from "./hookUseState/HookCounter";
import HookCounterTwo from "./hookUseState/HookCounterTwo";
import HookCounterThree from "./hookUseState/HookCounterThree";
import HookCounterFour from "./hookUseState/HookCounterFour";
import HookCounterOne from "./hookUseEffect/HookCounterOne";

function App() {
  return (
    <div className="App">
      <HookCounterOne />
    </div>
  );
}

export default App;
