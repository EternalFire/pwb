
// 内容模块

var
  idUtil = require('../util').id, // id模块

  contentCache, // 内容缓存

  wrapCreateID,

  create,
  retrieve,
  update,
  del;

  contentCache = [];

  wrapCreateID = () => { 
    return idUtil.create();
  };

  // 创建内容
  // param.title string 标题
  // param.tag string 标签
  // param.content string 内容
  create = (param) => {
    param.id = wrapCreateID();
    contentCache.push(param);    
    return param;
  };

  // 检索内容
  // param.title string 标题
  // param.id integer ID
  retrieve = (param) => {
    var result;

    if (!param) {
      // console.log(contentCache);
      return contentCache;
    }

    if (param.id) {

      contentCache.some((e) => {
        var ret = e.id === param.id;
        if (ret) {
          result = e;
          return true;
        }
      });

      return result;
    }

    console.log('retrieve param without id');
    return false;
  };

  // 更新内容
  // param.title string 标题
  // param.tag string 标签
  // param.content string 内容
  // param.id integer ID
  update = (param) => {
    var result;

    if (param.id) {

      contentCache.forEach((e, i) => {
        if (e.id === param.id) {
          contentCache[i].title   = contentCache[i].title   || param.title;
          contentCache[i].tag     = contentCache[i].tag     || param.tag;
          contentCache[i].content = contentCache[i].content || param.content;

          result = contentCache[i];
        }
      });

      return result;
    }

    console.log('update param without id');
    return false;
  };

  // 删除内容
  // param.id integer ID
  del = (param) => {
    var result;
    if (param.id) {
      contentCache.forEach((e, i) => {
        if (e.id === param.id) {
          result = i;
        }
      });

      if (result >= 0) {
        contentCache.splice(result, 1);
        return true;
      }

      console.log('del fail with id ', param.id);
    }

    console.log('del param without id');
    return false;
  };


module.exports = {
  name: 'content',
  create: create,
  retrieve: retrieve,
  update: update,
  del: del
};


