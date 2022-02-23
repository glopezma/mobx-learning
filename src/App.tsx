import { observer } from "mobx-react";
import * as React from "react";
import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./shared/header/header";
import { pokemonStore } from "./store/pokemon/pokemon.store";
const PokemonList = lazy(() => import("./pages/pokemonList/pokemonList"));
const PokemonDetail = lazy(
  () => import("./pages/pokemonDetails/pokemonDetails")
);

const App = observer(() => {
  useEffect(() => {
    pokemonStore.setPokemonList();
  });

  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <Link to="/details">Poke Details</Link>
                  <PokemonList></PokemonList>
                </div>
              }
            />
            <Route
              path="/details/:name"
              element={
                <div>
                  <Link to="/">Home</Link>
                  <PokemonDetail></PokemonDetail>
                </div>
              }
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
});

export default App;
