import React from 'react';
import { Route } from 'react-router-dom';
import ItemDetailContainer from './item_detail_container';



class PokemonDetail extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(e) {
        this.props.requestPokemon(this.props.match.params.pokemonId);
    }

    componentDidUpdate(prevProps) {
        // debugger;
        if (this.props.match.params.pokemonId !== prevProps.match.params.pokemonId ){
            this.props.requestPokemon(this.props.match.params.pokemonId);
      }
    }


    render () {
        if (!this.props.pokemon) {
            return <p>loading...</p>
        }
        // debugger;

        return (
            <div>
                <p>{this.props.pokemon.name}</p>
                <img src={this.props.pokemon.image_url}/>
                <p>Items: {this.props.pokemon.item_ids}</p>
                <Route path="/pokemon/:pokemonId/items/:itemId" component={ItemDetailContainer} />
            </div>
        );
    }

}

export default PokemonDetail;