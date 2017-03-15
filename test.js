var assert = require('assert');
var Calculator = require('./index.js');

describe('Calculator', function() {
  describe('sum', function() {
    it('sum of 2 and 5 should be 7', function() {
      assert.equal(Calculator.sum(2,5), 7);
    });
  });
});
