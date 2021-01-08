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
  const calculatedHeight = height * 10;
  const selectedStats = stats.reduce(
    (acc, stat) => ({ ...acc, [stat.stat.name]: stat.base_stat }),
    {}
  );
  const selectedAbilities = abilities.map((abilitie) => {
    return abilitie.ability.name;
  });
  const selectedTypes = types.map((type) => {
    return type.type.name;
  });
  return new Pokemon(
    id,
    name,
    weight,
    calculatedHeight,
    selectedSprites,
    selectedStats,
    selectedAbilities,
    selectedTypes
  );
}
