import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const url = "http://localhost:3001/pokemon";

    fetch(url)
      .then((r) => r.json())
      .then((d) => setPokemon(d))
  }, [])

  function handleSearch(e) {
    console.log(e.target.value)
    setSearch(e.target.value)
  }

  function handleSubmit(newPokemon) {
    console.log(newPokemon)
    setPokemon([...pokemon, newPokemon])
  }


  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onSubmit={handleSubmit} />
      <br />
      <Search onSearch={handleSearch} search={search} />
      <br />
      <PokemonCollection pokemon={pokemon} search={search} />
    </Container>
  );
}

export default PokemonPage;
