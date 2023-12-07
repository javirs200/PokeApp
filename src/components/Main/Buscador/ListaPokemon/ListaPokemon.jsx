import React, { useEffect, useState } from "react";
import PokeCard from './PokeCard'
import { v4 as uuidv4 } from "uuid";

const ListaPokemon = ({ Pokemons }) => {

  const drawList = () => {
    return Pokemons.map((pkm, i) => {
      console.log();
      return <PokeCard key={uuidv4()} pokemon={pkm} />
    })
  }

  return (
    <div className='listaPokemon'>
      <link rel="stylesheet" href="https://justingolden.me/pokemon-types-css/types.min.css"></link>
      {Pokemons ? drawList() : ''}
    </div>
  );
};

export default ListaPokemon;