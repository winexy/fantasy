const daggy = require('daggy');

const Coord = daggy.tagged('Coord', ['x', 'y', 'z']);

Coord.prototype.translate = function (x, y, z) {
  return Coord(this.x + x, this.y + y, this.z + z);
};

Coord.prototype.equals = function (that) {
  return this.x === that.x && this.y === that.y && this.z === that.z;
};

Line.prototype.equals = function (that) {
  return this.from.equals(that.from) && this.to.equals(that.to);
};

module.exports = Coord;
