import React from 'react'
import Boton from './Boton'
import imgInicio from "../assets/static/retroPicBasquet.jpg"

import "../assets/css/NavBar.css"
import { Link } from 'react-router-dom'
import CarroItem from './CarroItem'
export default function NavBar() {

    return (
        <>
            <div className='contenedor'>
                <Link to="/"> <img className='imgInicio' src={imgInicio} alt="imagen boton inicio" /></Link>
                <h1 className="titulo">
                    Retro <br />
                    Basquet Store
                </h1>
                <Boton></Boton>
                <CarroItem></CarroItem>


            </div>

        </>

    )
}
