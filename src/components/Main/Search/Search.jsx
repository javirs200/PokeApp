import React,{useState} from "react";
import axios,{ AxiosError } from "axios"

const Search = ({ addPokemon,clearPokemons }) => {

  const [pokemon,setPokemon] = useState('')

  const searchPokemon = async () => {
    if (pokemon.length > 0) {
      try {
        // console.log('lamada api con pokemon ', pokemon);
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)//trows axios error if pokemon not exist  , beacuse endpoint not exist
        if (res.data) {
          //console.log(res.data);
          const pokemonObj = { 
            name: res.data.name, 
            id: res.data.id, 
            url:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${res.data.id}.gif`,
            types : res.data.types
          }
          addPokemon(pokemonObj)
        }
      } catch (error) {
        if(error instanceof AxiosError)
          //manejar excepcion mostrar panel o algo
          console.log('pokemon no existente',error);
        else
          console.log('error', error);
      }
    } else {
      console.log('nombre no introducido');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // desencadeno llamada a api
    searchPokemon(pokemon)

    //clear input and state
    e.target.poke.value = ''
    setPokemon('')    
  }

  const handleClick = (e) => {
      clearPokemons()
  }

  const handleChange = (e) => {
    setPokemon(e.target.value)
  }

  return (
    <>
      <h2>Busca Pokemon</h2>
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor='poke'>Nombre o numero del Pokemon :  </label>
        <input type="text" name="poke" id="poke" placeholder='Pokemon Name' onChange={handleChange} />
        <br />
        <br />
        <button type="submit">Buscar</button>
      </form>
      <button onClick={handleClick} >Despejar</button>
    </>
  );
};

export default Search;