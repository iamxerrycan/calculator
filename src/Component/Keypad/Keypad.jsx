import React, { useState } from "react";
import "./Keypad.css";

export default function Keypad({ onButtonClick }) {
  const [expression, setExpression] = useState("");

  const handleClick = (value) => {
    if (["+", "-", "*", "/", "⌫"].includes(value)) {
      handleArithmeticOperator(value);
    } else {
      onButtonClick(value);
    }
  };

  const handleBackspace = () => {
    handleArithmeticOperator("⌫");
    console.log("backspace clicked");
  };

  const handleArithmeticOperator = (operator) => {
    if (operator === "⌫") {
      setExpression((prevExpression) => prevExpression.slice(0, -1));
    } else {
      onButtonClick(operator);
    }

    if (operator === "=") {
      try {
        let result = eval(expression);
        setExpression(String(result));
      } catch (error) {
        setExpression("Error");
      }
    } else {
      setExpression((prevExpression) => prevExpression + operator);
    }
  };

  const keys = [
    { label: "7" },
    { label: "8" },
    { label: "9" },
    { label: "4" },
    { label: "5" },
    { label: "6" },
    { label: "1" },
    { label: "2" },
    { label: "3" },
    { label: "0" },
    { label: "." },
    { label: "=" },
  ];

  const symbol = [
    { label: "⌫", value: "⌫" },
    { label: "÷", value: "/" },
    { label: "×", value: "*" },
    { label: "−", value: "-" },
    { label: "+", value: "+" },
  ];

  return (
    <div className="keypad">
      <div className="keypad_keys">
        {keys.map((item, index) => (
          <p
            key={index}
            onClick={() =>
              item.label === "⌫" ? handleBackspace() : handleClick(item.label)
            }
          >
            {item.label}
          </p>
        ))}
      </div>

      <div className="keypad_symbol">
        {symbol.map((item, index) => (
          <p key={index} onClick={() => handleArithmeticOperator(item.value)}>
            {item.label}
          </p>
        ))}
      </div>
    </div>
  );
}
