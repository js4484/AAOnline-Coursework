import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/game';
// import Setup from './components/setup';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    // ReactDOM.render(<Setup />, root);
    ReactDOM.render(<Game />, root);
})