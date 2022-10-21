import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemon, search }) {

  const searchedPoke = pokemon.filter((poke)=>{
    const lowerPoke = poke.name.toLowerCase();
    
    return lowerPoke.includes(search.toLowerCase())
  })

  const pokemonList = searchedPoke.map((poke)=>{
    return <PokemonCard key={poke.id} name={poke.name} hp={poke.hp} sprites={poke.sprites} />
  })

  console.log(pokemonList)

  return (
    <Card.Group itemsPerRow={6}>
      {pokemonList}
    </Card.Group>
  );
}

export default PokemonCollection;
