import React, { useState } from "react";
import FormularioCadastro from "../forms/FormularioCadastro";
import ListaProfessores from "../forms/ListaProfessores";
import "./Cadastrar.css";

import Header from "../header/Header";

const Cadastrar = () => {
  const [professores, setProfessores] = useState([]);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const handleDeleteProfessor = (index) => {
    const updatedProfessores = [...professores];
    updatedProfessores.splice(index, 1);
    setProfessores(updatedProfessores);
  };

  const handleCadastrarProfessor = (newProfessor) => {
    setProfessores([...professores, newProfessor]);
    setMostrarFormulario(false);
  };

  return (
    <div>
      <Header />
      <div className="cadastrar-container">
        <h1>Gerenciador de Professores</h1>

        <button
          className="cadastrar-button"
          onClick={() => setMostrarFormulario(!mostrarFormulario)}
        >
          Cadastrar Professor
        </button>

        {mostrarFormulario && (
          <FormularioCadastro onCadastrar={handleCadastrarProfessor} />
        )}
        <ListaProfessores
          professores={professores}
          onDeleteProfessor={handleDeleteProfessor}
        />
      </div>
    </div>
  );
};

export default Cadastrar;
