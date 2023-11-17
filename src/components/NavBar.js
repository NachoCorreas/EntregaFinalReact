import React, { useContext }from 'react'
import Boton from './Boton'
import imgInicio from "../assets/static/retroPicBasquet.jpg"

import "../assets/css/NavBar.css"
import { Link } from 'react-router-dom'
import CarroItem from './CarroItem'
import Contexto from '../context/Contexto';

export default function NavBar() {
    const { carrito } = useContext(Contexto);
    const cantidadTotal = carrito.reduce((total, producto) => total + producto.cantidad, 0);
    return (
        <>
            <div className='contenedor'>
                <Link to="/"> <img className='imgInicio' src={imgInicio} alt="imagen boton inicio" /></Link>
                <h1 className="titulo">
                    Retro <br />
                    Basquet Store
                </h1>
                <Boton></Boton>
                <CarroItem cantidad={cantidadTotal}></CarroItem>


            </div>

        </>

    )
}
