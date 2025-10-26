import React from 'react';

const Botao = ({ setModal }) => {
  return <button onClick={() => setModal(true)}>Abrir</button>;
};

export default Botao;
