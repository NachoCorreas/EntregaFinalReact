import React, { useContext } from 'react'
import carro from "../assets/static/carrito.png"
import "../assets/css/NavBar.css"
import { Link } from 'react-router-dom'

export default function CarroItem() {
  
  return (
    <>
    <Link to="/carrito"><img className='carro' src={carro} alt="carrito" /></Link>
   
    </>
    
  )
}
