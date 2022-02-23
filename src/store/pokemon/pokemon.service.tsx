import axios from "axios";

class PokemonService {
  baseUrl = "https://pokeapi.co/api/v2/pokemon/";

  async getAllPokemon() {
    return axios
      .get(`${this.baseUrl}?offset=0&limit=151`)
      .then((resp) => resp.data)
      .catch((error) => {
        console.error("error", error);
      });
  }

  async getPokemonList(offset: number, limit: number) {
    return axios
      .get(`${this.baseUrl}?offset=${offset}&limit=${limit}`)
      .then((resp) => resp.data)
      .catch((error) => {
        console.error("error", error);
      });
  }

  async getPokemonWithId(id: string | number) {
    return axios
      .get(`${this.baseUrl}/${id}`)
      .then((resp) => resp.data)
      .catch((error) => {
        console.error("error", error);
      });
  }

  async getPokemonWithUrl(url: string) {
    return axios
      .get(url)
      .then((resp) => resp.data)
      .catch((error) => {
        console.error("error", error);
      });
  }
}

const pokemonService = new PokemonService();
export default pokemonService;
