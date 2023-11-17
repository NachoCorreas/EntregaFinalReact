// import React, { useContext } from "react";
// import "../assets/css/Carrito.css";
// import ItemCarrito from "../components/ItemCarrito";
// import Contexto from "../context/Contexto";
// export default function Carrito() {
//   const { carrito, eliminarCarrito } = useContext(Contexto);
//    console.log(carrito, "que me llega al carrito")

//    const totalPrecio = carrito.reduce((total, carro) => total + carro.precio, 0);

//   return (
//     <>
//       <div className="carrito">
//         <div className="carrito-listadito">
//           {carrito.map((carro, i) => (
//             <ItemCarrito
//               {...carro}
//               key={i}
//               eliminarCarrito={eliminarCarrito}
//             ></ItemCarrito>
//           ))}
//         </div>

//         <div className="carrito-precio">
//           Total a pagar <br />
//           <strong>U$D {totalPrecio} </strong>
//         </div>
//       </div>
//     </>
//   );
// }

// modal

import React, { useContext, useState } from "react";
import "../assets/css/Carrito.css";
import ItemCarrito from "../components/ItemCarrito";
import Contexto from "../context/Contexto";
import Modal from '../components/Modal'


export default function Carrito() {
  const { carrito, vaciarCarrito } = useContext(Contexto);
  const [mostrarModal, setMostrarModal] = useState(false);
   console.log(carrito, "que me llega al carrito")

   const totalPrecio = carrito.reduce((total, carro) => total + carro.precio * carro.cantidad, 0);
   


   const abrirModal = () => {
     vaciarCarrito()
    setMostrarModal(true);
    setTimeout(() => {
      cerrarModal();
    }, 1500);
  };

  const cerrarModal = () => {
    setMostrarModal(false);
  };

  return (
    <>
      <div className="carrito">
        <div className="carrito-listadito">
          {carrito.map((carro, i) => (
            <ItemCarrito
              {...carro}
              key={i}
  
            ></ItemCarrito>
          ))}
        </div>
        <div className="carrito-precio">
          Total a pagar <br />
          <strong>AR$ {totalPrecio} </strong>
        </div>

        <button className="pagar" onClick={abrirModal} disabled={carrito.length === 0}>
          Pagar
        </button>
        <Modal mostrar={mostrarModal} cerrarModal={cerrarModal} />
      </div>
    </>
  );
}