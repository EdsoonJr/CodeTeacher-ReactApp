import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Header from "../header/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="texto">
          <h2>
            <p>Ache o professor </p>
            <p>ideal para aprender </p>
            <p>a programar!</p>
          </h2>

          <div className="botao">
          
            <Link to="/cadastrar">
              <button className="glow-on-hover" type="button">
                Buscar
              </button>
            </Link>
          </div>
        </div>

        <div className="imagem">
          <img src="https://imgur.com/y2DFsnl.png" alt="" />
        </div>
      </div>

      <footer></footer>
    </div>
  );
};

export default Home;
