define('module/pwb/dataio', function(require, exports, module) {

  'use strict';
  
  // 导入导出模块
  
  var input, output;
  
  input = function input(str) {
    try {
      return JSON.parse(str);
    } catch (e) {
      return false;
    }
  };
  
  output = function output(array) {
    return JSON.stringify(array);
  };
  
  module.exports = {
    name: 'dataio',
    input: input,
    output: output
  };

});
