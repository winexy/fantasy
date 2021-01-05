const daggy = require('daggy');

const Line = daggy.tagged('Line', ['from', 'to']);

module.exports = Line;
