import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../assets/css/Home.css"
import imgHome from "../assets/static/AddidasShoesErwin.jpg"
import imgZapa from "../assets/static/ConverseOfficialShoes.jpg"

export default function Home() {
  return (
   <>
   <Container className='contenedorHome'>
    <Row className='row1 text-center '>
      <Col className='titulo text-center'><h2>Bienvenido a tu mundo RETRO</h2></Col>
      <Col><img className='imgHome img-fluid img-thumbnail' src={imgHome} alt="promo" /></Col>
    </Row>
    <Row className='row2 text-center '>
      <Col className='titulo'><p>Este es tu mundo retro, aqui encontraras indumentaria Old School para que te recontra luquees!!!</p></Col>
      <Col><img className='imgHome img-fluid img-thumbnail ' src={imgZapa} alt="promo" /></Col>
      <Col className='titulo'>
      <p>Encontraras una amplia variedad de zapatillas, ropa y accesorios para todos los estilos retro que te imagines</p>
    </Col>
    </Row>
  </Container>
   </> 
  )
}
