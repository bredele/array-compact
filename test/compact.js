var compact = require('compact');
var assert = require('assert');




describe('compact', function(){
  it('should return the last element of an Array', function(){
    var arr = ['olivier', false, 'amy'];
    var result = compact(arr);
    assert(result.length === 2);
    assert(result[0] === 'olivier');
    assert(result[1] === 'amy');
  });

});
