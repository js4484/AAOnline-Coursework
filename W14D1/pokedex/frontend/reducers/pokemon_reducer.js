import { RECEIVE_ALL_POKEMON, RECEIVE_ONE_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_POKEMON:
            const allPokemon = action.pokemon;
            return Object.assign({}, state, allPokemon);
        case RECEIVE_ONE_POKEMON:
            const poke = action.payload.poke;
            return Object.assign({}, state, poke);
        default:
            return state;
    }
}

export default pokemonReducer;