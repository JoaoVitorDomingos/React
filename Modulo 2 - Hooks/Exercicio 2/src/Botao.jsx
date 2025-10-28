import React from 'react';

const Botao = ({ texto, setStorage }) => {
  function buscarProduto() {
    window.localStorage.setItem('produto', texto);
    setStorage(texto);
  }

  return (
    <button onClick={buscarProduto} style={{ margin: '10px' }}>
      {texto}
    </button>
  );
};

export default Botao;
