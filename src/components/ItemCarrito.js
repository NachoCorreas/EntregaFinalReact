import React , { useContext }from "react";
import "../assets/css/ItemCarrito.css";
import Borrar from "../assets/static/borrar.png";
import Contexto from "../context/Contexto";


export default function ItemCarrito(props) {
  const { eliminarCarrito } = useContext(Contexto);
  const { nombre, precio, foto, id , talle , cantidad } = props;
  
  
  // console.log(props, "como vienen al item carrito");
  const handleBorrar = () => {
    eliminarCarrito( props );
  };

  return (
    <>
      <div className="carrito-item">
        <img src={foto} alt="" className="carrito-item-img" />
        <div className="carrito-txt">
          <h1 className="carrito-item-titulo">{nombre}</h1>
          <h4 className="carrito-item-titulo">Cantidad: {cantidad}</h4>
          <h1 className="carrito-item-titulo">Talle: {talle}</h1>
          <h3 className="carrito-item-precio">AR${precio * cantidad}</h3>
        </div>

        <img
          src={Borrar}
          alt=""
          className="carrito-item-borrar"
          onClick={handleBorrar}
        />
      </div>
    </>
  );
}
