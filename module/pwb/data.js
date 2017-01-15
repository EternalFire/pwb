
// 存储模块

var 
  dataKey = 'dataKey',

  init,
  save,
  load
;

init = () => {

};

save = (array) => {
  var str = JSON.stringify(array);
  localStorage.setItem(dataKey, str);
  return str;
};

load = () => {
  var str = localStorage.getItem(dataKey);
  return JSON.parse(str);
};

module.exports = {
  name: 'data',
  init: init,
  save: save,
  load: load
};