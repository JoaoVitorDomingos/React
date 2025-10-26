import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import Home from './Home';
import Produtos from './Produtos';

const App = () => {
  const { pathname } = window.location;

  let Componente;
  if (pathname.includes('produtos')) Componente = Produtos;
  else Componente = Home;

  return (
    <>
      <Header />
      <Componente />
    </>
  );
};

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
