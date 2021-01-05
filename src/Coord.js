const daggy = require('daggy');

const Coord = daggy.tagged('Coord', ['x', 'y', 'z']);

// translate :: Cord ~> (a, a, a) -> Cord
Coord.prototype.translate = function (x, y, z) {
  return Coord(this.x + x, this.y + y, this.z + z);
}.autoC;

// equals :: Cord ~> Cord -> bool
Coord.prototype.equals = function (that) {
  return this.x === that.x && this.y === that.y && this.z === that.z;
};

module.exports = Coord;
