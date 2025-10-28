import React from 'react';

const Produto = ({ storage }) => {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    if (storage != null) {
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${storage}`)
        .then((resposta) => resposta.json())
        .then((json) => {
          console.log(json);
          setDados(json);
        });
    }
  }, [storage]);

  if (dados == null) return null;
  return (
    <div style={{ border: 'solid 1px black', padding: '10px', margin: '10px' }}>
      <h1>{dados.nome}</h1>
      <p>R$ {dados.preco}</p>
    </div>
  );
};

export default Produto;
