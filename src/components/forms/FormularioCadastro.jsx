import React, { useState } from "react";

const FormularioCadastro = ({ onCadastrar }) => {
  const [nome, setNome] = useState("");
  const [contato, setContato] = useState("");
  const [disciplina, setDisciplina] = useState("");

  const handleSaveProfessor = () => {
    if (nome && contato && disciplina) {
      onCadastrar({ nome, contato, disciplina });
      setNome("");
      setContato("");
      setDisciplina("");
    }
  };

  return (
    <div className="cadastro-container">
      <h2>Cadastrar Professor</h2>
      <form>
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />

        <label htmlFor="contato">Contato</label>
        <input
          type="text"
          id="contato"
          value={contato}
          onChange={(e) => setContato(e.target.value)}
          required
        />

        <label htmlFor="disciplina">Disciplina</label>
        <input
          type="text"
          id="disciplina"
          value={disciplina}
          onChange={(e) => setDisciplina(e.target.value)}
          required
        />

        <button type="button" onClick={handleSaveProfessor}>
          Cadastrar Professor
        </button>
      </form>
    </div>
  );
};

export default FormularioCadastro;
