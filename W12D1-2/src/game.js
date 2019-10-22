const Asteroid = require("./asteroid.js");
const Ship = require("./ship.js");

function Game () {
  this.DIM_X = 750;
  this.DIM_Y = 750;
  this.NUM_ASTEROIDS = 5;
  this.asteroids = [];
  this.addAsteroids();
  this.ship = new Ship({pos: this.randomPosition(), game: this})
};

Game.prototype.addAsteroids = function () {
  while (this.asteroids.length < this.NUM_ASTEROIDS ) {
    this.asteroids.push(new Asteroid ({pos: this.randomPosition(), game: this})) 
    };
}

Game.prototype.randomPosition = function () {
    const arr = [this.getRandomInt(0, this.DIM_X), this.getRandomInt(0, this.DIM_Y)];   
    return arr;
}

Game.prototype.getRandomInt = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
}

Game.prototype.draw = function (ctx) {
  const that = this;
  ctx.clearRect(0, 0, that.DIM_X, that.DIM_Y);
  const currentArr = this.allObjects();
  for (let i = 0; i < currentArr.length; i++) {
    currentArr[i].draw(ctx); 
  }
}  

Game.prototype.allObjects = function () {
    const newArr = this.asteroids;
    newArr.push(this.ship);
    return newArr;
}

Game.prototype.moveObjects = function () {
    const currentArr = this.allObjects();
    for (let i = 0; i < currentArr.length; i++) {
        currentArr[i].move(); 
    }
}

Game.prototype.wrap = function(pos) {
    if (pos[0] < 0) {
        pos[0] = this.DIM_X + pos[0]
    } else {
        pos[0] = pos[0] % this.DIM_X;
    };
    if (pos[1] < 0) {
      pos[1] = this.DIM_Y + pos[1]
    } else {
      pos[1] = pos[1] % this.DIM_Y;
    };
    return pos;
}


Game.prototype.checkCollisions = function () {

  const currentArr = this.allObjects();

  for (let i = 0; i < currentArr.length; i++) {
    for (let j = 0; j < currentArr.length; j++) {
        const first = currentArr[i];
        const second = currentArr[j];
      if (first !== second && first.isCollidedWith(second)) {
          const collision = first.collideWith(second);
          if (collision) { return }

        }
    }
  }
};

Game.prototype.step = function () {
  this.moveObjects();
  this.checkCollisions();
}


Game.prototype.remove = function (asteroid) {
  let pos = this.asteroids.indexOf(asteroid);
  this.asteroids.splice(pos, 1);
}
module.exports = Game;

