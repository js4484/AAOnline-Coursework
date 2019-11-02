import React from 'react';

class PokemonIndex extends React.Component {
    constructor(props) {
        super(props)

    }


    componentDidMount(e) {
        this.props.requestAllPokemon();
    }

    render() {
      const listItems = []
        this.props.pokemon.forEach((poke, i) => {
            listItems.push(<li key={i}> {poke.name} <img src={poke.image_url} height="30px" width="30px"></img> </li>)
        })
        return (
            <ul>
              {listItems}
            </ul> 
        );
    }
}

export default PokemonIndex;