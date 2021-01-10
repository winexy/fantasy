const daggy = require('daggy');

const Max = daggy.tagged('Max', ['value'])

Max.prototype.concat = function (that) {
  return Max(this.value > that.val ? this.value : that.value)
}

module.exports = Max;