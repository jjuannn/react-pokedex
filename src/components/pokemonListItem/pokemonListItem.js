import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./pokemonListItem.css";
import { Link } from "react-router-dom";

export default function PokemonListItem({ name }) {
  return (
    <Link
      to={`/pokemon/${name}`}
      className="list-group-item list-group-item-action pokemon-index-item"
      style={{ textTransform: "capitalize" }}
    >
      {name}
    </Link>
  );
}
