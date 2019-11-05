import { connect } from 'react-redux';
// import { selectPokemon } from '../../reducers/selectors';
import { requestPokemon } from '../../actions/pokemon_actions';
import { selectPokemonItem } from '../../reducers/selectors';
import ItemDetail from './item_detail';

const mapStateToProps = (state, ownProps) => {
    // debugger;
    return {
        // pokemon: state.entities.pokemon[ownProps.match.params.pokemonId]
      
        item: selectPokemonItem(state, ownProps.match.params.itemId)
    }
};

const mapDispatchToProps = dispatch => ({
    // requestPokemon: (id) => dispatch(requestPokemon(id))
    requestItem: (id) => dispatch(requestItem(id))
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemDetail);

