import * as APIUtil from '../util/api_util';


export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';

export const RECEIVE_POKEMON = 'RECEIVE_POKEMON';

export const RECEIVE_ITEM = 'RECEIVE_ITEM';

export const receiveAllPokemon = pokemon => ({
    type: RECEIVE_ALL_POKEMON,
    pokemon
});

export const receivePokemon = payload => ({
    type: RECEIVE_POKEMON,
    payload
});

export const receiveItem = payload => ({
    type: RECEIVE_ITEM, 
    payload
});

export const receiveNewPokemon = payload => ({
    type: RECEIVE_NEW_POKEMON,
    payload
})

export const requestAllPokemon = () => (dispatch) => (
    APIUtil.fetchAllPokemon()
        .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
)

export const requestPokemon = (id) => (dispatch) => (
    APIUtil.fetchPokemon(id)
        .then(payload => dispatch(receivePokemon(payload)))
)

export const requestItem = (itemId) => (dispatch) => (
    APIUtil.fetchItem(itemId)
        .then(payload => dispatch(receiveItem(payload)))
)

export const createNewPokemon = (pokemon) => (dispatch) => {
    APIUtil.createPokemon(pokemon)
        .then(pokemon => dispatch(receiveNewPokemon(pokemon)))
}

