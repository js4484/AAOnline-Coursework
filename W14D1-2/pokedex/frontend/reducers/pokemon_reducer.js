import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
        const pokeAll = action.pokemon;
      return Object.assign({}, state, pokeAll);
    case RECEIVE_POKEMON:
      // debugger;
      const poke = action.payload.pokemon;
      return Object.assign({}, state, {[poke.id]: poke})
    case RECEIVE_NEW_POKEMON:
      // debugger;
      const pokemon = action.pokemon;
      return Object.assign({}, state, { [pokemon.id]: pokemon })
    default: 
      return state; 
  }
 
}

export default pokemonReducer;