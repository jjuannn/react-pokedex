export class Pokemon {
  constructor(
    id,
    name,
    weight,
    height,
    sprites,
    abilities,
    types,
    attack,
    defense,
    hp,
    specialAttack,
    specialDefense,
    speed
  ) {
    this.id = id;
    this.name = name;
    this.weight = weight;
    this.height = height;
    this.sprites = sprites;
    this.abilities = abilities;
    this.types = types;
    this.attack = attack;
    this.defense = defense;
    this.hp = hp;
    this.specialAttack = specialAttack;
    this.specialDefense = specialDefense;
    this.speed = speed;
  }
}
