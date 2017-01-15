var id = require('../../module/util').id;
var expect = require('chai').expect;

// 生成多个id
var create = function(times) {
  var 
    result = [], 
    t = times || 1
    ;

  for (var i = 0; i < t; i++) {
    result.push(id.create());
  }

  return result;
};

var show = function(array) {
  array.forEach(function(e, i) {
    console.log("[" + i + "] = " + e);
  });
};

// 数组中的数是否都不相同
var isUnique = function(array) {
  var record = {};

  return !array.some(function(e, i) {
    if (!record[e]) {
      record[e] = true;

    } else {
      return true;
    }

    return false;
  });
};


describe('id模块', function() {
  
  it('产生10个不重复的id', function() {
    var 
      array = create(10),
      ret = false
      ;

    show(array);
    ret = isUnique(array);

    console.log('isUnique = [' + ret + ']');

    expect(isUnique(array)).to.be.ok;
  });

  it('产生50个不重复的id', function() {
    var 
      array = create(50),
      ret = false
      ;

    show(array);
    ret = isUnique(array);

    console.log('isUnique = [' + ret + ']');

    expect(isUnique(array)).to.be.ok;
  });
});
