export function selectAllPokemon(state) {
  return Object.values(state.entities.pokemon);
}

export function selectPokemonItem(state, itemId) {
  return state.entities.items[itemId];
}