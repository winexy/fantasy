const daggy = require('daggy');

const Sum = daggy.tagged('Sum', ['value'])

Sum.prototype.concat = function (that) {
  return Sum(this.value + that.value)
}

module.exports = Sum;