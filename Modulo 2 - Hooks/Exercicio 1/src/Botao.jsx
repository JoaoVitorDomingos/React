import React from 'react';

const Botao = ({ texto, link, setObjeto, setCarregando }) => {
  async function pegarProduto() {
    setCarregando(true);
    const resposta = await fetch(link);

    const produto = await resposta.json();
    setObjeto(produto);
    setCarregando(false);
  }

  return (
    <button onClick={pegarProduto} style={{ marginRight: '10px' }}>
      {texto}
    </button>
  );
};

export default Botao;
