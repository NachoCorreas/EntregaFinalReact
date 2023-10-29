// import axios from "axios";

import { collection, getDocs} from "firebase/firestore";
import Contexto from "./Contexto";
import { useReducer , useEffect, useContext} from "react";
import Reducer from "./Reducer";
import { db } from "../routes/App";


export default function UsarContexto(props) {
  const { children } = props;

  const estadoInicial = {
    products: [],
    carrito: [],
  };
  const [state, dispatch] = useReducer(Reducer, estadoInicial);

  const agregarCarrito = (item) => {
    console.log("Agregamos a carrito", item);
    dispatch({ type: "AGREGAR_CARRITO", payload: item });
  };
  const eliminarCarrito = (item) => {
    console.log("Eliminar carrito", item);
    dispatch({ type: "ELIMINAR_CARRITO", payload: item });
  };

   

  const listameProductos = () => {
    const itemCollection = collection(db, "EntregaFinal");
    getDocs(itemCollection)
      .then((res) => {
        let item = res.docs.map((elem) => ({ ...elem.data() }));
        console.log("Data de Firebase:", item);
        dispatch({ type: "LISTAME_PRODUCTOS", payload: item });
      })
      .catch((error) => {
        console.error("Error al obtener datos de Firebase:", error);
      });
  };
  
  // ...
  
  
  
  // ...
  
  console.log("Estado después de listameProductos:", state.products);
  
  
useEffect(() => {
  listameProductos();
}, []); // Asegúrate de proporcionar las dependencias correctas si es necesario


  
  

   
  return (
    <Contexto.Provider
      value={{
        products: state.products,
        carrito: state.carrito,
        listameProductos,
        agregarCarrito,
        eliminarCarrito,
      }}
    >
      {children}
    </Contexto.Provider>
  );
}
