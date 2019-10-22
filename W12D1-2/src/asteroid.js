const Util = require("./util.js");
const MovingObject = require("./moving_object.js");
const Ship = require("./ship.js");


function Asteroid(object) {
    object.vel = Util.randomVec(4);
    object.radius = object.radius || 15;
    object.color = object.color || "#808080";

    MovingObject.call(this, object);
}

Util.inherits(Asteroid, MovingObject);

Asteroid.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof Ship) {
        otherObject.relocate();     
        return true;
    }
    return false;
}

module.exports = Asteroid;