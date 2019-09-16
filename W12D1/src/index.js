const MovingObject = require("./moving_object.js");
const Util = require("./util.js");
const Asteroid = require("./asteroid.js");
const Game = require("./game.js");
const GameView = require("./game_view.js");


document.addEventListener('DOMContentLoaded', (event) => {
    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext("2d");
    console.log("Webpack is working!");
    window.MovingObject = MovingObject;
    window.Util = Util;
    window.Asteroid = Asteroid;
    window.ctx = ctx;
    window.Game = Game;
    window.GameView = GameView;
    let this_game = new GameView(ctx);
    this_game.start(ctx);
});

