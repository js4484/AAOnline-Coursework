import { connect } from 'react-redux';
import { createNewPokemon } from '../../reducers/selectors';
import PokemonIndex from './pokemon_index';


const mapDispatchToProps = (dispatch) => ({
    createNewPokemon: (pokemon) => dispatch(createNewPokemon(pokemon))
});


export default connect(
    mapDispatchToProps
)(PokemonForm);

