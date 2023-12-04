import React, { useEffect, useState } from "react";
import PokeCard from './PokeCard'
import { v4 as uuidv4 } from "uuid";

const ListaPokemon = ({ pokemon }) => {

  const [Pokemons, setPokemons] = useState([])

  const searchPokemon = async () => {

    if(pokemon.length > 0){

      try {

        console.log('lamada api con pokemon ',pokemon);
  
        setPokemons(Pokemons.concat(pokemon))
  
      } catch (error) {
  
        console.log('error llama api -> ', error);
  
      }

    }

    
  };

  useEffect(() => { searchPokemon() }, [pokemon])

  const drawList = () => {
    return Pokemons.map((pkm, i) => <PokeCard key={uuidv4()} rawData={pkm} />)
  }

  return <div >{drawList()}</div>;
};

export default ListaPokemon;