import React from 'react';
import Produto from './Produto';
import Botao from './Botao';

const link1 = 'https://ranekapi.origamid.dev/json/api/produto/tablet';
const link2 = 'https://ranekapi.origamid.dev/json/api/produto/smartphone';
const link3 = 'https://ranekapi.origamid.dev/json/api/produto/notebook';

const App = () => {
  const [objeto, setObjeto] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);

  return (
    <div>
      <Produto objeto={objeto} carregando={carregando} />
      <Botao
        texto={'Produto 1'}
        link={link1}
        setObjeto={setObjeto}
        setCarregando={setCarregando}
      />
      <Botao
        texto={'Produto 2'}
        link={link2}
        setObjeto={setObjeto}
        setCarregando={setCarregando}
      />
      <Botao
        texto={'Produto 3'}
        link={link3}
        setObjeto={setObjeto}
        setCarregando={setCarregando}
      />
    </div>
  );
};

export default App;
