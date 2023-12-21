import React from "react";
import "../Header/Header.css";

export default function Header({expression , history , result}) {
  return (
    <div className="header costom_scroll" >
      <div className="header_history">
      {history.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>  
      <div className="header_expression costom_scroll">
        <p>{expression}</p>
      </div>
      <p className="header_result">{result}</p>
    </div>
  );
}
