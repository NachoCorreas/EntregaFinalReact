import React, { useContext } from 'react'

import "../assets/css/CardItems.css"
import Contexto from '../context/Contexto'
export default function CardsItems(props) {
    // const { nombre, precio, foto, talle, id } = props;
    const { products, agregarCarrito } = useContext(Contexto);
    
    
//   console.log("Datos en CardItems:", { products });
  
//   const producto = products.find((item) => item.id == products.id);
const producto = products.map((elem)=>({...elem}))
  



  console.log("Producto encontrado:", producto);

    return (
        <>

            <div className="home-item">
                <img src={producto.foto} alt="" className="home-item-img" />
                <div className="home-item-info">
                    <h1 className="home-item-titulo">{producto.nombre}</h1>
                    <p className="home-item-medidas">Talle: {producto.talle}</p>
                    <div className="home-item-actions">
                        <h3 className="home-item-precio">AR$ {producto.precio}</h3>
                        <button
                            className="home-item-comprar"
                            onClick={() => {
                                console.log("Agregando al carrito:", producto.nombre);
                                agregarCarrito(producto.nombre);
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
