
// ID模块

var 
  id,
  usedID, // 使用过的ID

  init,
  create,
  used,
  randomNumber
  ;

  id = 1; // 初始ID
  usedID = {};

  // 导入已存在的ID
  init = (idArray) => {
    idArray.forEach((e) => {
      usedID[e] = true;
    });
  };

  // 创建ID
  create = () => {
    var result = id;
    
    while (usedID[result]) {
      result = randomNumber();
    }
    
    usedID[result] = true;

    return result;
  };

  randomNumber = () => {
    return Math.floor(Math.random() * (Number.MAX_VALUE % 10000));
    // return id++;
  };

  used = (index) => {
    usedID[index] = true;
  };

  id = randomNumber();

module.exports = {
  name: 'id',
  init: init,
  create: create,
  used: used
};