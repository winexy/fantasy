const daggy = require('daggy');

const Line = daggy.tagged('Line', ['from', 'to']);

// Setoid
// equals :: Line ~> Line ~> bool
Line.prototype.equals = function (that) {
  return this.from.equals(that.from) && this.to.equals(that.to);
};


module.exports = Line;
