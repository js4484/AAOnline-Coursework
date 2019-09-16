const Util = require("./util.js");

function MovingObject(object) {
    this.pos = object["pos"];
    this.vel = object["vel"];
    this.radius = object["radius"];
    this.color = object["color"];
    this.game = object["game"];

};

MovingObject.prototype.draw = function(ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();

  ctx.arc(
    this.pos[0],
    this.pos[1],
    this.radius,
    0,
    2 * Math.PI,
    false
  );

  ctx.fill();
};

MovingObject.prototype.move = function() {
    let newPos = [(this.pos[0] + this.vel[0]), (this.pos[1] + this.vel[1])];
    this.pos = this.game.wrap(newPos);
};

MovingObject.prototype.isCollidedWith = function (otherObject) {
  let x1 = this.pos[0];
  let y1 = this.pos[1];
  let x2 = otherObject.pos[0];
  let y2 = otherObject.pos[1];
  const dist = Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));

  if((this.radius + otherObject.radius) >= dist ) {
    return true;
  } else {
    return false;
  };
};


module.exports = MovingObject;

