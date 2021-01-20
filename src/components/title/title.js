import React, { useContext } from "react";
import "./title.css";
import { Link } from "react-router-dom";
import offsetContext from "../../context/offsetContext";

export default function Title() {
  const { setPageOffset } = useContext(offsetContext);
  return (
    <header className="pokedex-title">
      <h1
        onClick={() => {
          setPageOffset(0);
        }}
      >
        <Link className="title-text" to="/">
          Pokedex
        </Link>
      </h1>
    </header>
  );
}
