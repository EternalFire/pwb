
var 
  util = require('./module/util'),
  pwb = require('./module/pwb')
  ;




module.exports = {
  pwb: pwb,
  util: util,
  testAdd: function(){

    pwb.modules.content.create({
      title: "t1",
      tag: "key",
      content: "t1\'s content !!!! [" + util.id.create() + "]"
    });
    pwb.modules.content.retrieve()
  },
  testDel: function(id) {
    pwb.modules.content.del({'id': id});
    pwb.modules.content.retrieve();
  }
};