import React, { useEffect, useState } from "react";
import "./Header.css";

export default function Header() {
  const [scroll, setScroll] = useState("top");
  const listenScrollEvent = () => {
      window.scrollY > 10 ? setScroll("scroll") : setScroll("top")
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  });

  const style = `header-container ${scroll}`

  return (
    <header className={style}>
      <h4 className="header-title">SENTENCE</h4>
      {/* <p className="header-align">about</p>
            <p className="header-align">about</p> */}
    </header>
  );
}
