const daggy = require('daggy');

const Bool = daggy.taggedSum('Bool', {
  True: [],
  False: []
});

// invert :: Bool ~> Bool
Bool.prototype.invert = function () {
  return this.cata({
    True: () => Bool.False,
    False: () => Bool.True
  });
};

// Setoid
// equals :: Bool ~> Bool ~> bool
Bool.prototype.equals = function (that) {
  return this instanceof Bool.True === that instanceof Bool.True;
};

module.exports = Bool;
