const daggy = require('daggy');

const Product = daggy.tagged('Product', ['value'])

Product.prototype.concat = function (that) {
  return Product(this.value * that.value)
}

module.exports = Product;