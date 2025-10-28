import React from 'react';
import Botao from './Botao';
import Produto from './Produto';

const App = () => {
  const [storage, setStorage] = React.useState(null);

  React.useEffect(() => {
    const produtoStorage = window.localStorage.getItem('produto');
    if (produtoStorage != null) setStorage(produtoStorage);
    console.log(produtoStorage);
  }, []);

  return (
    <div>
      <h1>Preferência: {storage}</h1>
      <Botao texto="notebook" setStorage={setStorage} />
      <Botao texto="smartphone" setStorage={setStorage} />
      <Produto storage={storage} />
    </div>
  );
};

export default App;
