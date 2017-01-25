
// 导入导出模块

var 
  input,
  output  
; 

input = function(str) {
  try {
    return JSON.parse(str);
  } catch(e) {
    return false;
  }
};

output = function(array) {
  return JSON.stringify(array);
};

module.exports = {
  name: 'dataio',
  input: input,
  output: output
};