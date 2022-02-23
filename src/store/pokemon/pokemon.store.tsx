import { action, observable, reaction, toJS } from "mobx";
import { from } from "rxjs";
import { PokemonSearch } from "./models/pokemonSearch.interface";
import pokemonService from "./pokemon.service";

interface PokemonStoreState {
  pokemonList: PokemonSearch[];
  isLoading: boolean;
  selectedPokemon: PokemonSearch;
  selectedPokemonData: any;
  previousPokemon: PokemonSearch;
  nextPokemon: PokemonSearch;
}

const initialState: PokemonStoreState = {
  pokemonList: [],
  isLoading: false,
  selectedPokemon: null,
  selectedPokemonData: null,
  previousPokemon: null,
  nextPokemon: null,
};

export const pokemonStore = observable({
  ...initialState,
  setPokemonList: action(async () => {
    pokemonStore.setIsLoading(true);
    const resp = await pokemonService.getAllPokemon();
    pokemonStore.setPokemonListSuccess([...resp.results]);
    pokemonStore.setIsLoading(false);
  }),
  setPokemonListSuccess: action((pokemonList: any[]) => {
    pokemonStore.pokemonList = [...pokemonList];
  }),
  setIsLoading: action((isLoading: boolean) => {
    pokemonStore.isLoading = isLoading;
  }),
  setSelectedPokemon: action((pokemon: PokemonSearch) => {
    pokemonStore.setIsLoading(true);
    pokemonStore.selectedPokemon = pokemon;
  }),
  setSelectedPokemonData: action((data: any) => {
    pokemonStore.selectedPokemonData = data;
  }),
  setPreviousPokemon: action((pokemon: PokemonSearch) => {
    pokemonStore.previousPokemon = pokemon;
  }),
  setNextPokemon: action((pokemon: PokemonSearch) => {
    pokemonStore.nextPokemon = pokemon;
  }),
});

reaction(
  () => pokemonStore.selectedPokemon,
  (pokemon: PokemonSearch) => {
    const pokemonItem = { ...pokemon };
    if (pokemonItem) {
      console.log("pokemonStore.selectedPokemon", pokemonItem);
      from(pokemonService.getPokemonWithUrl(pokemonItem.url)).subscribe(
        (resp) => {
          console.log(resp);
          pokemonStore.setIsLoading(false);
          pokemonStore.setSelectedPokemonData(resp);
        }
      );
    }
  }
);

reaction(
  () => pokemonStore.previousPokemon,
  (pokemon: PokemonSearch) => {
    const pokemonItem = { ...pokemon };
    if (pokemonItem) {
      console.log("pokemonStore.previousPokemon", pokemonItem);
    }
  }
);

reaction(
  () => pokemonStore.pokemonList,
  (pokemonList: PokemonSearch[]) => {
    const pokemonItems = toJS(pokemonList);
    console.log("pokemonStore.pokemonList", pokemonItems);
  }
);
