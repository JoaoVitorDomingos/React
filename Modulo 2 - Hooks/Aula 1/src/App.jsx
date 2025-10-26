import React from 'react';
import Modal from './Modal';
import Botao from './Botao';

const App = () => {
  const [modal, setModal] = React.useState(false);

  return (
    <div>
      <Modal modal={modal} setModal={setModal} />
      <Botao setModal={setModal} />
    </div>
  );
};

export default App;
