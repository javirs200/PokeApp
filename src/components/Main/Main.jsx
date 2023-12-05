import React from "react";
import { useState } from 'react'
import Search from "./Search";
import ListaPokemon from "./ListaPokemon";

const Main = () => {

  const [Pokemons,setPokemons] = useState([])

  const addPokemon = (pokemon)=>{
    setPokemons(Pokemons.concat(pokemon))
  }

  const clearPokemons = ()=>{
    setPokemons([])
  }

  return (<>
    <Search addPokemon={addPokemon} clearPokemons={clearPokemons}/>
    <br />
    <ListaPokemon Pokemons={Pokemons}/>
    </>)
};

export default Main;
