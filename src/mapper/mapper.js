import { Pokemon } from "../entities/pokemon.js";

export function fromApiToEntity(pokemon) {
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
  const hp = stats[0].base_stat;
  const attack = stats[1].base_stat;
  const defense = stats[2].base_stat;
  const specialAttack = stats[3].base_stat;
  const specialDefense = stats[4].base_stat;
  const speed = stats[5].base_stat;
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
    selectedAbilities,
    selectedTypes,
    attack,
    defense,
    hp,
    specialAttack,
    specialDefense,
    speed
  );
}
