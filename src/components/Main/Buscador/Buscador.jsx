import React from "react";
import { useState } from 'react'
import Search from "./Search";
import ListaPokemon from "./ListaPokemon";

const Buscador = () => {

  const [Pokemons,setPokemons] = useState([])

  const addPokemon = (pokemon)=>{
    setPokemons(Pokemons.concat(pokemon))
  }

  const clearPokemons = ()=>{
    setPokemons([])
  }

  return (<section>
    <Search addPokemon={addPokemon} clearPokemons={clearPokemons}/>
    <br />
    <ListaPokemon Pokemons={Pokemons}/>
    </section>)
};

export default Buscador;