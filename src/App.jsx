import React,{useState} from "react";
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import { BrowserRouter } from "react-router-dom";
import { PokemonContext } from "./context/pokemonContext";

function App() {

  const [Pokemons,setPokemons] = useState([])

  const addPokemon = (pokemon)=>{
    setPokemons(Pokemons.concat(pokemon))
  }

  const clearPokemons = ()=>{
    setPokemons([])
  }

  return (
    <PokemonContext.Provider value={{Pokemons,addPokemon,clearPokemons}}>
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
      <Footer />
    </PokemonContext.Provider>
  )
}

export default App
