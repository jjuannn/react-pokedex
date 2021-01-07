const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

export function getPage(offset) {
  return fetch(`${BASE_URL}?offset=${offset}&limit=20`)
    .then((r) => (!r.ok ? new Error("API ERROR") : r))
    .then((r) => r.json())
    .then((jsonResponse) => {
      return jsonResponse;
    });
}

export function getPokemonInfo(name) {
  return fetch(`${BASE_URL}${name}`)
    .then((r) => (!r.ok ? new Error("API ERROR") : r))
    .then((r) => r.json())
    .then((jsonResponse) => {
      return jsonResponse;
    });
}
