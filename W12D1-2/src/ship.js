const MovingObject = require("./moving_object.js");
const Util = require("./util.js");

function Ship (object) {
  object.vel = [0, 0];
  object.radius = 10;
  object.color = object.color || "#800020";
  this.game = object.game;

  MovingObject.call(this, object);
};

Util.inherits(Ship, MovingObject);

Ship.prototype.relocate = function () {
    this.pos = this.game.randomPosition();
}

Ship.prototype.power = function (impulse) {
  this.vel[0] = this.vel[0] + impulse[0];
  this.vel[1] = this.vel[1] + impulse[1];
}


module.exports = Ship;