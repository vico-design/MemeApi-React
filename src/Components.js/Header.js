import React from "react";
import meme from "../images/meme.png";

function Header() {
  return (
    <header>
      <img src={meme} alt="Problem?" />
      <p>Meme Generator</p>
    </header>
  );
}

export default Header;
