import * as React from "react";
import { pokemonStore } from "../../store/pokemon/pokemon.store";
import { observer } from "mobx-react";
import { PokemonSearch } from "../../store/pokemon/models/pokemonSearch.interface";

const handlePokemonClick = (pokemon: PokemonSearch) => {
  console.log("handlePokemonClick", { ...pokemon });
  pokemonStore.setSelectedPokemon(pokemon);
  window.location.assign("/details/" + pokemon.name);
};

const PokemonList = observer(() => (
  <div className="flex justify-center w-full">
    <ul className="w-6/12 min-w-fit">
      {pokemonStore.pokemonList.map((pokemon, index) => (
        <div className="m-2" key={`pokemon_div_${pokemon}_${index}`}>
          <li
            className="bg-green-200 p-5 align-middle rounded-2xl font-bold text-green-900 cursor-pointer
            hover:bg-green-300 hover:text-green-900 transition-colors hover:scale-110
            duration-150 hover:-translate-y-1 ease-in-out"
            onClick={() => handlePokemonClick(pokemon)}
            key={`${pokemon.name}_${index}`}
          >
            {pokemon.name}
          </li>
        </div>
      ))}
      )
    </ul>
  </div>
));

export default PokemonList;
