import React, { useState } from "react";
import Header from "./Component/Header/Header";
import "./App.css";
import moonIcon from "../src/monn.png";
import sunIcon from "../src/sunn.png";
import Keypad from "./Component/Keypad/Keypad";

console.log(sunIcon);

export default function App() {
  const [isDarkmode, setIsDarkmode] = useState(false);

  return (
    <div className="app" data-theme={isDarkmode? "dark" :""}>
      <div className="app_calculator">
        <div className="app_calculator_navbar">
          <div
            className="app_calculator_navbar_toggle"
            onClick={() => setIsDarkmode(!isDarkmode)}
          >
            <div
              className={`app_calculator_navbar_toggle_circle ${
                isDarkmode ? "app_calculator_navbar_toggle_circle_active" : ""
              }`}
            />
          </div>
          <img src={isDarkmode ? moonIcon : sunIcon} alt="mode" />
        </div>
        <Header />
        <Keypad/>
      </div>
    </div>
  );
}

