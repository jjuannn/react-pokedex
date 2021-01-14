import React from "react";
import { useParams } from "react-router-dom";
import { getPokemonInfo } from "../../api/api.js";
import useFetch from "../../hook/useFetch.js";
import { fromApiToEntity } from "../../mapper/mapper.js";
import Loading from "../loading/loading.js";
import "./pokemonCard.css";
import "bootstrap/dist/css/bootstrap.css";
import ErrorMessage from "../errorMessage/errorMessage.js";
export default function PokemonCard() {
  const { name } = useParams();
  const { data, error, loading } = useFetch(getPokemonInfo, name);

  if (error) {
    return <ErrorMessage error={error} />;
  }

  if (loading) {
    return <Loading />;
  }
  if (data) {
    const pokemon = fromApiToEntity(data);
    const {
      id,
      name,
      abilities,
      height,
      weight,
      types,
      hp,
      specialAttack,
      specialDefense,
      attack,
      defense,
      sprites,
    } = pokemon;
    return (
      <div>
        <div className="card pokemon-card">
          <div className="card-img-container">
            {sprites.map((sprite, i) => {
              return (
                <img
                  className="pokemon-img"
                  key={i}
                  src={sprite}
                  alt="Pokemon"
                />
              );
            })}
          </div>
          <div className="card-body">
            <h5 className="card-title pokemon-name">
              A wild #{`${id} ${name}`} appears!
            </h5>
            <hr className="my-4" />
            <div className="card-info-container">
              <p>
                <strong style={{ textTransform: "capitalize" }}>{name}</strong>{" "}
                has a weight of <strong className="stat-in-p">{weight}</strong>{" "}
                kg and a height of{" "}
                <strong className="stat-in-p">{height}</strong> cm. With{" "}
                <strong className="stat-in-p">{hp}</strong> hp, it is a very
                resistant pokemon! Don't fight with him, because has a normal
                attack of <strong className="stat-in-p">{attack}</strong> and a
                special one of{" "}
                <strong className="stat-in-p">{specialAttack}</strong>!. If you
                do, you will have to face a defense of{" "}
                <strong className="stat-in-p">{defense}</strong>, or even{" "}
                <strong className="stat-in-p">{specialDefense}</strong>!
              </p>

              <p className="attributes-list">
                Abilities:{" "}
                {abilities.map((abilitie, i) => {
                  return (
                    <strong key={i} className="attribute-item">
                      {abilitie}{" "}
                    </strong>
                  );
                })}
              </p>
              <p className="attributes-list">
                Types:{" "}
                {types.map((type, i) => {
                  return (
                    <strong key={i} className="attribute-item">
                      {type}
                    </strong>
                  );
                })}
              </p>
            </div>
            <a href="/" className="btn btn-dark">
              <i className="fas fa-arrow-left"></i> Back to list
            </a>
          </div>
        </div>
      </div>
    );
  }
  return null;
}
