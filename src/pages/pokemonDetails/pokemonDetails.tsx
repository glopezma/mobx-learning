import * as React from "react";
import { useEffect } from "react";
import { observer } from "mobx-react";
import { pokemonStore } from "../../store/pokemon/pokemon.store";
import { useParams } from "react-router-dom";

export const PokemonDetails = observer(() => {
  const params = useParams();

  useEffect(() => {
    const pokemon = pokemonStore.pokemonList.filter(
      (pokemon) => params.name === pokemon.name
    );
    pokemonStore.setSelectedPokemon(pokemon[0]);
  }, [params]);

  return (
    <div className="bg-gray-800">
      <h1>Pokemon Details</h1>
      <code className="text-pink-600">
        {JSON.stringify(pokemonStore.selectedPokemonData)}
      </code>
    </div>
  );
});

export default PokemonDetails;
