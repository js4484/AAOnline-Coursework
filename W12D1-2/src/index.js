const MovingObject = require("./moving_object.js");
const Util = require("./util.js");
const Asteroid = require("./asteroid.js");
const Game = require("./game.js");
const GameView = require("./game_view.js");

document.addEventListener("DOMContentLoaded", function () {
  const canvasEl = document.getElementById("canvas-game");

  const ctx = canvasEl.getContext("2d");
  const gv = new GameView(ctx);
  gv.start();

});

window.MovingObject = MovingObject;