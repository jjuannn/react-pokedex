import PokemonListItem from "../pokemonListItem/pokemonListItem.js";
import "bootstrap/dist/css/bootstrap.css";
import "./pokemonList.css";

export default function PokemonList({ results }) {
  return (
    <div>
      <div className="index-container list-group">
        {results.map((result, i) => {
          return <PokemonListItem {...result} key={i} />;
        })}
      </div>
    </div>
  );
}
