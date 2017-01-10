
// ID模块

var 
  id,
  usedID, // 使用过的ID

  init,
  create,
  randomNumber
  ;

  id = 0; // 初始ID
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
    // return Math.floor(Math.random() * (Number.MAX_VALUE % 1000000));
    return id++;
  };

  id = randomNumber();

module.exports = {
  name: 'id',
  init: init,
  create: create
};