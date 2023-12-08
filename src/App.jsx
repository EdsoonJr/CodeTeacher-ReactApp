import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Cadastrar from "./components/tela/Cadastrar";
import Entrar from "./components/entrar/Entrar";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastrar" element={<Cadastrar />} />
          <Route path="/entrar" element={<Entrar />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
