import React from "react";
import { useState } from 'react'
import Search from "./Search";
import ListaPokemon from "./ListaPokemon";

const Main = () => {

    const [pokemon, setPokemon] = useState('')

    const handleSubmit = (e) => {

        e.preventDefault();

        let campo = e.target.poke.value

        setPokemon(campo)

        // clear imput
        e.target.poke.value = ''

    }

  return (<>
    <Search handleSubmit={handleSubmit}/>
    <br />
    <ListaPokemon pokemon={pokemon}/>
    </>)
};

export default Main;
