

const uiReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        // case RECEIVE_POKEMON:
        //     const items = action.pokemon.items;
        //     return Object.assign({}, state, items)
        default:
            return state;
    }

}

export default uiReducer;