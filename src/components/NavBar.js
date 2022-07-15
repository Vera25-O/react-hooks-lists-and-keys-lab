import React from "react";

function NavBar() {
  const links = ["Home","About","Projects"];

  return <nav>{/* display an <a> tags for each link here */}
  <a href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#projects">Projects</a>
  </nav>;
}

export default NavBar;
