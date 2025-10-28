import React from 'react';
import Modal from './Modal';

const App = () => {
  const [contar, setContar] = React.useState(0);
  const [ativo, setAtivo] = React.useState(false);

  React.useEffect(() => {
    document.title = 'Contar ' + contar;
  }, [contar]);

  return (
    <div>
      <button onClick={() => setContar(contar + 1)}>Botao</button>
      <button onClick={() => setAtivo(!ativo)}>Modal</button>
      {ativo && <Modal />}
    </div>
  );
};

export default App;
