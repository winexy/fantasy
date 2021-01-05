const daggy = require('daggy');

const Bool = daggy.taggedSum('Bool', {
  True: [],
  False: []
});

Bool.prototype.invert = function () {
  return this.cata({
    True: () => Bool.False,
    False: () => Bool.True
  });
};

Bool.prototype.equals = function (that) {
  return this instanceof Bool.True === that instanceof Bool.True;
};

module.exports = Bool;
