const MovingObject = require("./moving_object.js");
const Util = require("./util.js");

function Asteroid(options) {
  options.origin = "Sirius";
  options.color = "crimson";
  options.radius = 7;
  options.vel = Util.randomVec(Math.floor(Math.random() * 10));
  MovingObject.call(this, options);
};

Util.inherits(MovingObject, Asteroid);

module.exports = Asteroid;