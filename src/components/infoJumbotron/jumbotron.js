import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./jumbotron.css";

export default function InfoJumbotron({ count }) {
  return (
    <div className="jumbotron-container">
      <div className="jumbotron info-jumbotron">
        <h1 className="display-4">Hello, world!</h1>
        <p className="lead">
          Welcome to React Pokedex! A place where you can find info of a total
          of {count} pokemons!
        </p>
        <hr className="my-4" />
        <p>This application consumes data from PokeApi</p>
        <a
          className="btn btn-danger btn-lg"
          href="https://pokeapi.co/"
          target="_blank"
          role="button"
        >
          Learn more
        </a>
      </div>
    </div>
  );
}
