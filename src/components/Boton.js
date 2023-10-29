import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Contexto from '../context/Contexto';

export default function Boton() {
    const {listameProductos} = useContext(Contexto)
    const zapas = ()=>{
        listameProductos()
    }
    return (
        <>
        <div className='botones'>
            <Link to="/zapatillas">
            <Button onClick={zapas} variant="primary">Zapatillas</Button>{' '}
            </Link>
            
            <Button  variant="primary">Camisetas</Button>{' '}
            <Button variant="primary">Conjuntos</Button>{' '}
        </div>
            


        </>
    )
}



