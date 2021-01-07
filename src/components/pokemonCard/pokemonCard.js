import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPokemonInfo } from "../../api/api.js";
import useFetch from "../../hook/useFetch.js";
import { fromApiToEntity } from "../../mapper/mapper.js";
import Loading from "../loading/loading.js";
import { Pokemon } from "../../entities/pokemon.js";

export default function PokemonCard(props) {
  const { name } = useParams();
  const { data, error, loading } = useFetch(getPokemonInfo, name);

  if (error) {
    return <Loading></Loading>;
  }

  if (loading) {
    return <Loading></Loading>;
  }

  if (data) {
    const pokemon = fromApiToEntity(data);
    console.log(pokemon);
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={pokemon.sprites[0]} />
          <div className="card-body">
            <h5 className="card-title">{"asd"}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
  return null;
}
