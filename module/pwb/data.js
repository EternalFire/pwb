
// 存储模块

var 
  dataKey = 'dataKey',

  init,
  save,
  load,
  clear
;

init = () => {

};

save = (array) => {
  var str = JSON.stringify(array);
  localStorage.setItem(dataKey, str);
  return str;
};

load = () => {
  var array = [],
    str = localStorage.getItem(dataKey)
  ;

  if (str) {
    array = JSON.parse(str);
  }
  return array;
};

clear = () => {
  localStorage.setItem(dataKey, '');
};

module.exports = {
  name: 'data',
  init: init,
  save: save,
  load: load,
  clear: clear
};