import React from 'react';
import ReactDOM from 'react-dom';
import {fetchAllPokemon} from './util/api_util';
import * as ACTIONS from './actions/pokemon_actions';
import {configureStore} from './store/store';
import {selectAllPokemon} from './reducers/selectors';
import Root from './components/root.jsx';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchAllPokemon = fetchAllPokemon;
  window.receiveAllPokemon = ACTIONS.receiveAllPokemon;
  window.requestAllPokemon = ACTIONS.requestAllPokemon;
  window.selectAllPokemon = selectAllPokemon;


  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, rootEl);
});