import React from "react";
import { Link } from 'react-router-dom'

const Home = () => {
  return <Link className={'link'} to='/search'><img src="./pokeball.svg" alt="pokeball"/></Link>
};

export default Home;
