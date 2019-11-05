import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';
import { HashRouter, Route, Switch } from "react-router-dom";
import ItemDetailContainer from './pokemon/item_detail_container';

const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            <Route path="/" component={PokemonIndexContainer} />
        </HashRouter>
    </Provider>
);

export default Root;