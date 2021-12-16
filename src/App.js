import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";


import Navbar from "./components/navbar"
import Login from "./components/login";
import EditServicio from "./components/editarServicio";
import Register from "./components/register";
import Servicios from "./components/servicios";

function App() {

  return (
    <div className="container">
      <Titulo/>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Bienvenida />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/editarServicio/:id" element={<EditServicio />} />
        </Routes>
      </Router>
    </div>


    // <div className="container">
    //   <Titulo/>
    //   <LoginRegistroUsuarios/>
    //   <AdquirirServicio/>
    //   <CarroDeCompras/>
    //   <Login/>
    // </div>
  );
}

function Titulo() {
  return (
    <div className="container text-center border bg-dark text-white">
      <h1 className="display-1">KEVIN STYLE PELUQUERIA</h1>
    </div>
  );
}

function Bienvenida(){
  return (
    <div className="container text-center border rounded bg-white text-dark">
      <h1 className="display-2">¡Bienvenido a KEVIN STYLE PELUQUERIA!</h1>
      <img src="logo512.png" />
    </div>
  );
}

export default App;
