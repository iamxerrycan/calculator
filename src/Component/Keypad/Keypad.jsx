import React, { useState } from "react";
import "./Keypad.css";

export default function Keypad({ onButtonClick }) {
  const handleClick = (value) => {
    onButtonClick(value);
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
               handleClick(item.label)
            }
          >
            {item.label}
          </p>
        ))}
      </div>

      <div className="keypad_symbol">
        {symbol.map((item, index) => (
          <p key={index} onClick={() => handleClick(item.value)}>
            {item.label}
          </p>
        ))}
      </div>
    </div>
  );
}
