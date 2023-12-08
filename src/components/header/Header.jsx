import React from "react";
import Menu from "../menu/Menu";
import "./header.css";

const Header = () => {
  return (
    <header>
      <img
        id="imglogo"
        src="https://i.imgur.com/mwe08GH.png"
        alt="LogoCodeTeacher"
      />

      <h1 className="logo">Code Teacher</h1>

      <input type="checkbox" id="check" />
      <label htmlFor="check" className="mostrar-menu">
        &#8801;
      </label>

      <nav className="menu">
        <Menu />
        <label htmlFor="check" className="esconder-menu">
          &#215;
        </label>
      </nav>
    </header>
  );
};

export default Header;
