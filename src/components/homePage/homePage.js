import React, { useState } from "react";
import useFetch from "../../hook/useFetch.js";
import { getPage } from "../../api/api.js";
import PokemonList from "../pokemonList/pokemonList.js";
import Loading from "../loading/loading.js";
import InfoJumbotron from "../infoJumbotron/jumbotron.js";
import Buttons from "../buttons/buttons.js";
import ErrorMessage from "../errorMessage/errorMessage.js";

export default function HomePage() {
  const [offset, setOffset] = useState(0);
  const { data, error, loading } = useFetch(getPage, offset);

  if (data) {
    return (
      <>
        <div className="page-buttons">
          <Buttons
            disabled={offset === 0 ? true : false}
            onClick={() => {
              setOffset(offset - 20);
            }}
            text="Previous page"
          />
          <Buttons
            disabled={offset > data.count ? true : false}
            onClick={() => {
              setOffset(offset + 20);
            }}
            text="Next page"
          />
        </div>
        <PokemonList {...data} />
        <InfoJumbotron {...data} />
      </>
    );
  }
  return (
    <>
      {loading && <Loading />}
      {error && <ErrorMessage error={error} />}
    </>
  );
}
