import "./App.css";
import React from "react";
import Title from "./components/title/title.js";
import HomePage from "./components/homePage/homePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PokemonCard from "./components/pokemonCard/pokemonCard";
import { OffsetContextProvider } from "./context/offsetContext.js";
import { CacheContextProvider } from "./context/cacheContext.js";

function App() {
  return (
    <>
      <Router>
        <OffsetContextProvider>
          <CacheContextProvider>
            <Title />
            <Switch>
              <Route path="/" exact>
                <HomePage />
              </Route>
              <Route path="/pokemon/:name" exact>
                <PokemonCard />
              </Route>
            </Switch>
          </CacheContextProvider>
        </OffsetContextProvider>
      </Router>
    </>
  );
}

export default App;
