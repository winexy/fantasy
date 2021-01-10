const daggy = require('daggy');

const Min = daggy.tagged('Min', ['value'])

Min.prototype.concat = function (that) {
  return Min(this.value < that.val ? this.value : that.value)
}

module.exports = Min;