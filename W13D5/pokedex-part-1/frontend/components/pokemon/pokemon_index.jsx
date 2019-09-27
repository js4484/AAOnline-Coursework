import React from 'react';

class PokemonIndex extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    };
    
    componentDidMount() {
        this.props.requestAllPokemon();
    }


    render () {
        const pokeLis = this.props.pokemon.map((poke) => {
            return <li key={poke.id}>
                {poke.name} <a href={poke.image_url}></a>
            </li>
        })

        return <ul>{pokeLis}</ul>
    }
};

export default PokemonIndex;