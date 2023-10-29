import React, { useContext } from 'react'

import "../assets/css/CardItems.css"
import Contexto from '../context/Contexto'
export default function CardsItems(props) {
    const { nombre, precio, foto, talle, id } = props;
    const { products, agregarCarrito } = useContext(Contexto);
    console.log("Productos en CardItems:", products);
    
  console.log("Datos en CardItems:", { nombre, precio, foto, talle, id });
  
  const producto = products.find((item) => item.id === id);

  console.log("Producto encontrado:", producto);

    return (
        <>

            <div className="home-item">
                <img src={foto} alt="" className="home-item-img" />
                <div className="home-item-info">
                    <h1 className="home-item-titulo">{nombre}</h1>
                    <p className="home-item-medidas">Talle: {talle}</p>
                    <div className="home-item-actions">
                        <h3 className="home-item-precio">AR$ {precio}</h3>
                        <button
                            className="home-item-comprar"
                            onClick={() => {
                                console.log("Agregando al carrito:", id);
                                agregarCarrito(id);
                            }}
                        >
                            +
                        </button>

                    </div>
                </div>
            </div>
        </>
    );
    
}
