import React, { useContext } from 'react';
import "../assets/css/CardItems.css";
import Contexto from '../context/Contexto';

export default function CardsItems(props) {
    const { products, agregarCarrito } = useContext(Contexto);
    const productId = props.id;
    const producto = products.find((item) => item.id === productId);

    if (!producto) {
        return null;
    }
// console.log("ACAAAAAAAAAAAAAAAAAAAAAAAAAA",producto);
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
                                agregarCarrito(producto);
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
