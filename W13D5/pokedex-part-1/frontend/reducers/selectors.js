
const selectAllPokemon = state => {
    let pokemon = Object.values(state.entities.pokemon);
    
    pokemon.forEach((poke, idx) => {
        poke = Object.assign({}, poke);
        pokemon[idx] = poke;
    });
    return pokemon;
};

export default selectAllPokemon;