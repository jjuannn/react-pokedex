import "./App.css";
import React from "react";
import Title from "./components/title/title.js";
import HomePage from "./components/homePage/homePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PokemonCard from "./components/pokemonCard/pokemonCard";
function App() {
  return (
    <>
      <Title />
      <Router>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/pokemon/:name" exact>
            <PokemonCard />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
