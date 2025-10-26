import React from 'react';

const Produto = ({ objeto, carregando }) => {
  function mostrarObjeto() {
    if (objeto != null)
      return (
        <>
          <p>Nome: {objeto.nome}</p>
          <p>Preço: R${objeto.preco}</p>
          <p>Descrição: {objeto.descricao}</p>
        </>
      );
    return 'Produto';
  }

  return (
    <div style={{ margin: '20px', padding: '20px', border: 'solid 1px' }}>
      {carregando ? 'Carregando...' : mostrarObjeto()}
    </div>
  );
};

export default Produto;
