;/*!module/util/id.js*/
define('module/util/id', function(require, exports, module) {

  'use strict';
  
  // ID模块
  
  var id, usedID, // 使用过的ID
  
  init, create, used, randomNumber;
  
  id = 1; // 初始ID
  usedID = {};
  
  // 导入已存在的ID
  init = function init(idArray) {
    idArray.forEach(function (e) {
      usedID[e] = true;
    });
  };
  
  // 创建ID
  create = function create() {
    var result = id;
  
    while (usedID[result]) {
      result = randomNumber();
    }
  
    usedID[result] = true;
  
    return result;
  };
  
  randomNumber = function randomNumber() {
    return Math.floor(Math.random() * (Number.MAX_VALUE % 10000));
    // return id++;
  };
  
  used = function used(index) {
    usedID[index] = true;
  };
  
  id = randomNumber();
  
  module.exports = {
    name: 'id',
    init: init,
    create: create,
    used: used
  };

});

;/*!module/util/index.js*/
define('module/util/index', function(require, exports, module) {

  'use strict';
  
  // 工具模块
  
  module.exports = {
    name: 'util',
    id: require('module/util/id')
  };

});
