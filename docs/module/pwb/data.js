define('module/pwb/data', function(require, exports, module) {

  'use strict';
  
  // 存储模块
  
  var dataKey = 'dataKey',
      init,
      save,
      load,
      clear;
  
  init = function init() {};
  
  save = function save(array) {
    var str = JSON.stringify(array);
    localStorage.setItem(dataKey, str);
    return str;
  };
  
  load = function load() {
    var array = [],
        str = localStorage.getItem(dataKey);
  
    if (str) {
      array = JSON.parse(str);
    }
    return array;
  };
  
  clear = function clear() {
    localStorage.setItem(dataKey, '');
  };
  
  module.exports = {
    name: 'data',
    init: init,
    save: save,
    load: load,
    clear: clear
  };

});
