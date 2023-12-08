// ListaProfessores.js
import React from 'react';

const ListaProfessores = ({ professores, onDeleteProfessor }) => {
  return (
    <div className="lista-container">
      <h2>Lista de Professores</h2>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Contato</th>
            <th>Disciplina</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {professores.map((professor, index) => (
            <tr key={index}>
              <td>{professor.nome}</td>
              <td>{professor.contato}</td>
              <td>{professor.disciplina}</td>
              <td>
                <button className="delete" onClick={() => onDeleteProfessor(index)}>
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaProfessores;
