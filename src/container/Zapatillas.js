import React, { useContext } from 'react'
import CardsItems from '../components/CardsItems'
import Contexto from '../context/Contexto'


export default function Zapatillas(props) {
const {products} = useContext(Contexto)
   
  return (
    <div className='zapas-container'>
      {products.map((producto)=> (
        <CardsItems key={producto.id} id={producto.id}/>
      ))
      }
    </div>
  )
}