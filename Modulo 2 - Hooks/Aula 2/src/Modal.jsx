import React from 'react';

const Modal = () => {
  React.useEffect(() => {
    function eventoScroll(evento) {
      console.log(evento);
    }

    window.addEventListener('scroll', eventoScroll);

    return () => {
      window.removeEventListener('scroll', eventoScroll);
    };
  }, []);

  return (
    <div
      style={{
        height: '500px',
        border: 'solid 1px black',
        margin: '10px',
        padding: '10px',
      }}
    >
      Modal
    </div>
  );
};

export default Modal;
