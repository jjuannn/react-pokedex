import React from "react";
import "./title.css";
import { Link } from "react-router-dom";
export default function Title() {
  return (
    <header className="pokedex-title">
      <h1>
        <Link className="title-text" to="/">
          Pokedex
        </Link>
      </h1>
    </header>
  );
}
