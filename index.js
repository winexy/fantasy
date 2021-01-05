const daggy = require('daggy');
const List = require('./src/List');
const Bool = require('./src/Bool');
const Coord = require('./src/Coord');
const Line = require('./src/Line');

console.log(
  List.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).reduce((a, b) => a + b, 0)
);

console.log(
  List.from([1, 2, 3])
    .map(x => x + 2)
    .filter(x => x > 5)
    .toArray()
);

Array.prototype.equals = function (that) {
  return this.length === that.length && this.every((x, i) => x === that[i]);
};

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const arr3 = [1, 2, 3];

console.log(arr1.equals(arr1));
console.log(arr1.equals(arr2) === arr2.equals(arr1));
console.log(arr1.equals(arr2) && arr2.equals(arr3) && arr1.equals(arr3));
