import React from 'react';

const App = () => {
  const [carrinho, setCarrinho] = React.useState(0);
  const [notificacao, setNotificacao] = React.useState(null);
  const refTimeout = React.useRef();

  function comprar() {
    setCarrinho(carrinho + 1);
    setNotificacao('Item adicionado ao carrinho');

    clearTimeout(refTimeout.current);
    refTimeout.current = setTimeout(() => {
      setNotificacao(null);
    }, 2000);
  }

  const [comentarios, setComentarios] = React.useState([]);
  const [input, setInput] = React.useState('');
  const refInput = React.useRef();

  function comentario() {
    setComentarios([...comentarios, input]);
    setInput('');
    refInput.current.focus();
  }

  return (
    <>
      <div style={{ marginBottom: '40px' }}>
        <p>{notificacao}</p>
        <button onClick={comprar} style={{ marginRight: '10px' }}>
          Adicionar ao carrinho {carrinho}
        </button>
        <button onClick={comentario}>Enviar comentario</button>
        <input
          type="text"
          value={input}
          onChange={({target}) => setInput(target.value)}
          ref={refInput}
          style={{ marginTop: '10px' }}
        />
        <ul>
          {comentarios.map((comentario, index) => (
            <li key={index}>{comentario}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
