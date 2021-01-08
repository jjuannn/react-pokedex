import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./pokemonIndex.css";
import { getPokemonInfo } from "../../api/api.js";
import useFetch from "../../hook/useFetch";
import { Link } from "react-router-dom";

export default function PokemonIndex({ name }) {
  return (
    <Link
      to={`/pokemon/${name}`}
      className="list-group-item list-group-item-action pokemon-index-item"
    >
      {name}
    </Link>
  );
}
