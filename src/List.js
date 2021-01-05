const daggy = require('daggy');

const List = daggy.taggedSum('List', {
  Cons: ['head', 'tail'],
  Nil: []
});

// map :: List a ~> (a -> b) -> List b
List.prototype.map = function (f) {
  return this.cata({
    Cons: (head, tail) => List.Cons(f(head), tail.map(f)),
    Nil: () => List.Nil
  });
};

// A "static" method for convenience.
List.from = function (xs) {
  return xs.reduceRight((acc, x) => List.Cons(x, acc), List.Nil);
};

// And a conversion back for convenience!
List.prototype.toArray = function () {
  return this.cata({
    Cons: (x, acc) => [x, ...acc.toArray()],
    Nil: () => []
  });
};

List.prototype.filter = function (predicate) {
  return this.cata({
    Cons: (head, tail) => {
      return predicate(head)
        ? List.Cons(head, tail.filter(predicate))
        : tail.filter(predicate);
    },
    Nil: () => List.Nil
  });
};

List.prototype.reduce = function (reducer, initial) {
  return this.cata({
    Cons: (head, tail) => {
      return List.Nil.is(tail)
        ? initial
        : tail.reduce(reducer, reducer(initial, head));
    },
    Nil: () => List.Nil
  });
};

List.prototype.equals = function (that) {
  return this.cata({
    // Note the two different Setoid uses:
    Cons: (head, tail) =>
      head.equals(that.head) && // a
      tail.equals(that.tail), // [a]
    Nil: () => that.is(List.Nil)
  });
};

module.exports = List;
