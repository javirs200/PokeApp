import React from "react";
import Buscador from "./Buscador/Buscador";
import Details from "./Details/Details";
import Home from "./Home/Home";
import { Route, Routes, Navigate } from "react-router-dom";

const Main = () => {

  return (
    <main className="principal">
      <link rel="stylesheet" href="https://justingolden.me/pokemon-types-css/types.min.css"></link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Pokemon/:id" element={<Details />} />
        <Route path="/search" element={<Buscador />} />
        <Route path="/*" element={<Navigate to={"/"} />} />
      </Routes>
    </main>)
};

export default Main;
