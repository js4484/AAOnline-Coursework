import React from "react";
import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    };
    
    componentDidMount() {
        this.props.requestAllPokemon();
    }


    render () {
        const pokemonItems = this.props.pokemon.map((poke) => {
            return <PokemonIndexItem key={poke.id} pokemon={poke} />
        });

        return <ul>{pokemonItems}</ul>
    }
};

export default PokemonIndex;