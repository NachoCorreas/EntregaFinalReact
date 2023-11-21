import React from 'react';
import '../assets/css/Modal.css'; 

const Modal = ({ mostrar, cerrarModal }) => {
  return (
    <>
      {mostrar && (
        <div className="modal-overlay modal-estilo-80s">
          <div className="modal-content">
            <p className="mensaje-estilo-80s">¡ Gracias por su compra Profe !</p>
            
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;