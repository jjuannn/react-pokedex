import PokemonIndex from "../pokemonIndex/pokemonIndex.js";
import "bootstrap/dist/css/bootstrap.css";
import "./pokemonIndexList.css";
import Buttons from "../buttons/buttons.js";

export default function PokemonIndexList({ results }) {
  return (
    <div>
      <div className="page-buttons">
        <Buttons text="Previous page" />
        <Buttons text="Next page" />
      </div>
      <div className="index-container list-group">
        {results.map((result, i) => {
          return <PokemonIndex {...result} key={i} />;
        })}
      </div>
    </div>
  );
}
