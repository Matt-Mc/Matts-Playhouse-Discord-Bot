var mocha = require('mocha');
var assert = require('assert');
describe('Control Test', function() {
  describe('#assertTrue', function() {
     it('should assert true', function() {
        assert.equal(1,1);
     });
  });
});
