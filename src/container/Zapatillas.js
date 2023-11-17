import React, { useContext } from 'react'
import CardsItems from '../components/CardsItems'
import Contexto from '../context/Contexto'


export default function Zapatillas(props) {
const {products} = useContext(Contexto)
    // console.log("🚀 ~ file: Zapatillas.js:8 ~ Zapatillas ~ products:", products)
   
  return (
    <div className='zapas-container'>
      {products.map((producto)=> (
        <CardsItems key={producto.id} id={producto.id}/>
      ))
      }
    </div>
  )
}