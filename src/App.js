import React from "react";
import "./App.css";
import Title from "./components/Title.js";
import DadJoke from "./components/DadJoke";
import Bikes from "./components/Bikes";
import Scooters from "./components/Scooters";

const App = () => {
  return (
    <div className="App">
      <Title />
      <hr />
      <Bikes />
      <hr />
      <Scooters />
      <hr />
      <DadJoke />
    </div>
  );
};

export default App;
