import React from "react";

const PokeCard = ({ pokemon }) => {

  function _pad(num) {
    num = num.toString();
    while (num.length < 4) num = "0" + num;
    return "#" + num;
  }

  return (
    <>
      {pokemon ? <div className="pokemonCard">
        <h2>{pokemon.name}</h2> <h3>{_pad(pokemon.id)}</h3>
        <img src={pokemon.url} alt={pokemon.name} />
        <p>{pokemon.types.map(el => 
        <span className={`type ${el.type.name}`} key={el.type.name}></span>
        )}
        </p>
      </div> : ''}
    </>

  );
};

export default PokeCard;
