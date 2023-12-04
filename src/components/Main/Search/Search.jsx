import React from "react";

const Search = ({handleSubmit}) => {

  return (
    <>
      <h2>Busca Ciudad</h2>
      <br/>
      <form onSubmit={handleSubmit}>
        <label htmlFor='poke'>Nombre de la Pokemon :  </label>
        <input type="text" name="poke" id="poke" placeholder='Pokemon Name' />
        <br/>
        <br/>
        <button type="submit">Buscar</button>
      </form>
    </>
  );
};

export default Search;