import { Pokemon } from "../entities/pokemon.js";

export function fromApiToEntity(pokemon) {
  //console.log(pokemon);
  const {
    id,
    name,
    weight,
    height,
    sprites,
    stats,
    abilities,
    types,
  } = pokemon;

  const selectedSprites = [sprites.front_default, sprites.back_default];

  return new Pokemon(
    id,
    name,
    weight,
    height,
    selectedSprites,
    stats,
    abilities,
    types
  );
}
