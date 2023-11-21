import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../container/Home";
import Layout from "../layouts/layouts";
import Carrito from "../container/Carrito";
import Zapatillas from "../container/Zapatillas";
import UsarContexto from "../context/UsarContexto";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASyxLVY9Ixg3x7T4CwCym1pWkccgJZe_c",
  authDomain: "entregafinal-1b7b0.firebaseapp.com",
  projectId: "entregafinal-1b7b0",
  storageBucket: "entregafinal-1b7b0.appspot.com",
  messagingSenderId: "318481840825",
  appId: "1:318481840825:web:bd2b4f3e68aaf1dcd93968"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore();

function App() {
  <link
     rel="stylesheet"
     href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
     integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
     crossorigin="anonymous"
   />
  return (
    <>
      <BrowserRouter>
      <UsarContexto>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/carrito" element={<Carrito />}></Route>
          <Route exact path="/zapatillas" element={<Zapatillas />}></Route>
          {/* <Route exact path="/carrito" element={<Carrito />}></Route>
          <Route exact path="/producto" element={<Producto />}></Route> */}
        </Routes>
        </Layout>
        </UsarContexto>


      </BrowserRouter>

    </>
  );
}

export default App;
