export const fetchAllPokemon = () => {
    return $.ajax ({
            type: "GET", 
            url: "/api/pokemon"
        })
}

export const fetchPokemon = (id) => {
    return $.ajax({
        type: "GET",
        url: `/api/pokemon/${id}`
    })
}

export const fetchItem = (arr) => {
    return $.ajax({
        type: "GET",
        url: `/api/pokemon/${arr[0]}/items/${arr[1]}`
    })
}

export const createPokemon = (pokeProps) => {
    return $.ajax({
        type: "POST",
        url: `/api/pokemon/new`,
        name: `${pokeProps.pokemon.name}`,
        image_url: `${pokeProps.pokemon.image_url}`,
        poke_type: `${pokeProps.pokemon.poke_type}`,
        attack: `${pokeProps.pokemon.attack}`,
        defense: `${pokeProps.pokemon.defense}`
        
    })
}
