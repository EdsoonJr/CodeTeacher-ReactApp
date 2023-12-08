import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const MenuItem = ({ to, label, onClick }) => (
  <Link to={to} onClick={onClick} className="menu-link">
    {label}
  </Link>
);

const Menu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { to: "/", label: "Início" },
    { to: "/cadastrar", label: "Cadastrar" },
    { to: "/entrar", label: "Entrar" },
  ];

  return (
    <>
      <input
        type="checkbox"
        id="check"
        checked={isMenuOpen}
        onChange={toggleMenu}
      />
      <label
        htmlFor="check"
        className={`mostrar-menu ${isMenuOpen ? "active" : ""}`}
      >
        &#8801;
      </label>

      <nav className={`menu ${isMenuOpen ? "open" : ""}`}>
        {menuItems.map((item, index) => (
          <MenuItem key={index} {...item} onClick={toggleMenu} />
        ))}
        <label htmlFor="check" className="esconder-menu">
          &#215;
        </label>
      </nav>
    </>
  );
};

export default Menu;
