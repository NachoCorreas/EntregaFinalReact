// UsarContexto.js

import { collection, getDocs } from "firebase/firestore";
import Contexto from "./Contexto";
import { useEffect, useState } from "react";
import { db } from "../routes/App";

export default function UsarContexto(props) {
  const { children } = props;
  const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];
  const [products, setProducts] = useState([]);
  const [carrito, setCarrito] = useState(carritoInicial);

  const agregarCarrito = (item, cantidad) => {
    const repetido = carrito.findIndex((product) => product.id === item.id)
   if (repetido !== -1){
    const agregaItem = [...carrito]
    agregaItem[repetido].cantidad += 1;
    setCarrito(agregaItem);
   }else{
    setCarrito((prevCarrito) => [...prevCarrito, { ...item, cantidad: 1 }]);
   }
  };

  // const eliminarCarrito = (item) => {
  //   setCarrito((prevCarrito) =>
  //     prevCarrito.filter((product) => product.id !== item.id)
  //   );
  // };

  const eliminarCarrito = (item) => {
    const existenteIndex = carrito.findIndex((producto) => producto.id === item.id);
    if (existenteIndex !== -1) {
      const nuevoCarrito = [...carrito];
      if (nuevoCarrito[existenteIndex].cantidad > 1) {
        nuevoCarrito[existenteIndex].cantidad -= 1;
      } else {
        nuevoCarrito.splice(existenteIndex, 1);
      }
      setCarrito(nuevoCarrito);
    }
  };

  const vaciarCarrito = () =>{
    setCarrito([])
  }

  const listameProductos = () => {
    const itemCollection = collection(db, "EntregaFinal");
    getDocs(itemCollection)
      .then((res) => {
        let item = res.docs.map((elem) => ({ ...elem.data() }));
        setProducts(item);
      })
      .catch((error) => {
        console.error("Error al obtener datos de Firebase:", error);
      });
  };

  useEffect(() => {
    listameProductos();
  }, []);

  useEffect(() => {
    // Actualizar el localStorage cuando cambia el carrito
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  return (
    <Contexto.Provider
      value={{
        products,
        carrito,
        listameProductos,
        agregarCarrito,
        eliminarCarrito,
        vaciarCarrito,
      }}
    >
      {children}
    </Contexto.Provider>
  );
}
