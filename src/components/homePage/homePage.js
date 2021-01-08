import React, { useState } from "react";
import useFetch from "../../hook/useFetch.js";
import { getPage } from "../../api/api.js";
import PokemonIndexList from "../pokemonIndexList/pokemonIndexList.js";
import Loading from "../loading/loading.js";
import InfoJumbotron from "../infoJumbotron/jumbotron.js";

export default function HomePage() {
  const [offset, setOffset] = useState(0);
  const { data, error, loading } = useFetch(getPage, offset);
  return (
    <>
      {loading && <Loading />}
      {data && <PokemonIndexList {...data} />}
      {error && console.error(error)}
      <InfoJumbotron {...data} />
    </>
  );
}
