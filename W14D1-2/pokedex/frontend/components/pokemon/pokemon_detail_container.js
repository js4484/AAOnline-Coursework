import { connect } from 'react-redux';
// import { selectPokemon } from '../../reducers/selectors';
import {requestPokemon} from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = (state, ownProps) => {
    // debugger;
    console.log("after debugger");
    return {
        
        pokemon: state.entities.pokemon[ownProps.match.params.pokemonId]
    }
};

const mapDispatchToProps = dispatch => ({
    requestPokemon: (id) => dispatch(requestPokemon(id))
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PokemonDetail);

