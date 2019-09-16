const MovingObject = require("./moving_object.js");
const Util = require("./util.js");
const Asteroid = require("./asteroid.js");

function Game(ctx) {
    this.DIM_X = 800;
    this.DIM_Y = 800;
    this.NUM_ASTEROIDS = 73;
    this.asteroids = [];
    this.addAsteroids();
};

Game.prototype.randomPosition = function() {
    const arr = [Math.floor(Math.random() * this.DIM_X), Math.floor(Math.random() * this.DIM_Y)];
    return arr;
};

Game.prototype.addAsteroids = function() {

    
    while (this.asteroids.length !== this.NUM_ASTEROIDS) {
        const game_pos = this.randomPosition();
      this.asteroids.push(new Asteroid({ pos: game_pos, game: this }));
    }
};


Game.prototype.draw = function(ctx) {
  console.log(this.asteroids);
  const canvas = document.getElementById('game-canvas');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  this.asteroids.forEach(asteroid => {
    asteroid.draw(ctx);
  });
}

Game.prototype.moveObjects = function(ctx) {
  this.asteroids.forEach(asteroid => {
    asteroid.move(ctx);
  });
}

Game.prototype.wrap = function(pos) {
    if(pos[0] < 0) {
        pos[0] += this.DIM_X;
    } else if (pos[1] < 0) {
        pos[1] += this.DIM_Y;
    }
  return [(pos[0] % this.DIM_X), (pos[1] % this.DIM_Y)];
}

Game.prototype.checkCollisions = function() {
    this.asteroids.forEach((asteroid) => {
        this.asteroids.forEach((asteroid2) => {

        });
    });
};


module.exports = Game;