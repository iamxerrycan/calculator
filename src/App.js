import React, { useState } from "react";
import Header from "./Component/Header/Header";
import "./App.css";
import moonIcon from "../src/monn.png";
import sunIcon from "../src/sunn.png";
import Keypad from "./Component/Keypad/Keypad";

console.log(sunIcon);

export default function App() {
  const [isDarkmode, setIsDarkmode] = useState(false);
  const [expression, setExpression] = useState("");
  const [history, setHistory] = useState([]);
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        const evalResult = eval(expression);
        setResult(evalResult);
        setHistory((prevHistory) => [...prevHistory, expression]);
        setExpression(String(evalResult));
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "⌫") {
      setResult('')
      setExpression((prevExpression) =>
        prevExpression.length > 0 ? prevExpression.slice(0, -1) : prevExpression
      );
    } else {
      setExpression((prevExpression) => prevExpression + value);
    }
  };

  const handleClear = () => {
    setExpression("");
    setHistory([]);
    setResult("");
  };

  return (
    <div className="app" data-theme={isDarkmode ? "dark" : ""}>
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
        <Header expression={expression} history={history} result={result} />
        <button onClick={handleClear} style={{backgroundColor:"black", color:"white", width:"100%"} }>AC</button>
        <Keypad onButtonClick={handleButtonClick} />
      </div>
    </div>
  );
}
