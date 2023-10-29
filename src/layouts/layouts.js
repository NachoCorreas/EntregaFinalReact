import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
export default function Layout(props) {
  const { children } = props;
  return (
    <>
      <NavBar></NavBar>
      {children}
      <Footer></Footer>
    </>
  );
}