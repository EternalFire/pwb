
// 导入导出模块

var 
  input,
  output  
; 

input = function(str) {
  return JSON.parse(str);
};

output = function(array) {
  return JSON.stringify(array);
};

module.exports = {
  name: 'dataio',
  input: input,
  output: output
};