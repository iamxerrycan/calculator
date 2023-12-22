import React from "react";
import "../Header/Header.css";
import { useRef ,useEffect } from "react";

export default function Header({expression , history , result}) {


  const headerRef = useRef(null);

  useEffect(() => {
    if (headerRef.current) {
      headerRef.current.scrollTop = headerRef.current.scrollHeight;
    }
  }, [expression, history, result]);


  return (
    <div className="header costom_scroll" ref={headerRef}>
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
