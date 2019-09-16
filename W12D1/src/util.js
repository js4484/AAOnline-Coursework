const Util = {

  inherits: function (ParentClass, ChildClass) {
    function Surrogate() {};
    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate();
    ChildClass.prototype.constructor = ChildClass;
  },
  
  randomVec: function (length) {
    const deg = 2 * Math.PI * Math.random(); 
    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
  },


  // Scale the length of a vector by the given amount.
  scale: function (vec, m) {
  return [(vec[0] * m) + 1, (vec[1] * m) + 1];
  }


};

module.exports = Util;