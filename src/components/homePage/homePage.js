import React, { useContext } from "react";
import useFetch from "../../hook/useFetch.js";
import { getPage } from "../../api/api.js";
import PokemonList from "../pokemonList/pokemonList.js";
import Loading from "../loading/loading.js";
import InfoJumbotron from "../infoJumbotron/jumbotron.js";
import Buttons from "../buttons/buttons.js";
import ErrorMessage from "../errorMessage/errorMessage.js";
import offsetContext from "../../context/offsetContext.js";

export default function HomePage() {
  const { pageOffset, setPageOffset } = useContext(offsetContext);
  const { data, error, loading } = useFetch(getPage, pageOffset);
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

  if (data) {
    return (
      <>
        <div className="page-buttons">
          <Buttons
            disabled={pageOffset === 0 ? true : false}
            onClick={() => {
              setPageOffset(pageOffset - 20);
            }}
            text="Previous page"
          />
          <Buttons
            disabled={pageOffset > data.count ? true : false}
            onClick={() => {
              setPageOffset(pageOffset + 20);
            }}
            text="Next page"
          />
        </div>
        <PokemonList {...data} />
        <InfoJumbotron {...data} />
      </>
    );
  }
  return null;
}
