import React, { useState } from "react";
import useFetch from "../../hook/useFetch.js";
import { getPage, getPokemonInfo } from "../../api/api.js";
import PokemonIndexList from "../pokemonIndexList/pokemonIndexList.js";
import Loading from "../loading/loading.js";

export default function HomePage() {
  const [offset, setOffset] = useState(0);
  const { data, error, loading } = useFetch(getPage, offset);
  return (
    <>
      {loading && <Loading />}
      {data && <PokemonIndexList {...data} />}
      {error && console.error(error)}
    </>
  );
}
