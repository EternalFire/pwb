;/*!module/pwb/content.js*/
define('module/pwb/content', function(require, exports, module) {

  'use strict';
  
  // 内容模块
  
  var idUtil = require('module/util/index').id,
      // id模块
  
  contentCache,
      // 内容缓存
  
  wrapCreateID,
      copyContent,
      create,
      retrieve,
      update,
      del,
      clear;
  
  contentCache = [];
  
  wrapCreateID = function wrapCreateID() {
    return idUtil.create();
  };
  
  copyContent = function copyContent(content) {
    var result = {};
    for (var key in content) {
      result[key] = content[key];
    }
    return result;
  };
  
  // 创建内容
  // param.title string 标题
  // param.tag string 标签
  // param.content string 内容
  create = function create(param) {
    if (retrieve(param)) {
      return false;
    }
  
    if (param.id) {
      idUtil.used(param.id);
    } else {
      param.id = wrapCreateID();
    }
  
    contentCache.push(param);
    return param;
  };
  
  // 检索内容
  // param.title string 标题
  // param.id integer ID
  retrieve = function retrieve(param) {
    var result;
  
    if (!param) {
      // console.log(contentCache);
      return contentCache.map(function (e) {
        return copyContent(e);
      });
    }
  
    if (param.id) {
  
      contentCache.some(function (e) {
        var ret = e.id === param.id;
        if (ret) {
          result = e; // exist
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
  update = function update(param) {
    var result;
  
    if (param.id) {
  
      contentCache.forEach(function (e, i) {
        if (e.id === param.id) {
          contentCache[i].title = param.title || contentCache[i].title;
          contentCache[i].tag = param.tag || contentCache[i].tag || '';
          contentCache[i].content = param.content || contentCache[i].content;
  
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
  del = function del(param) {
    var result;
    if (param.id) {
      contentCache.forEach(function (e, i) {
        if (e.id === param.id) {
          result = i;
        }
      });
  
      if (result >= 0) {
        contentCache.splice(result, 1);
        return true;
      }
  
      console.log('del fail with id ', param.id);
      return false;
    }
  
    console.log('del param without id');
    return false;
  };
  
  clear = function clear() {
    contentCache.forEach(function (e, i) {
      contentCache[i] = null;
    });
    contentCache = [];
  };
  
  module.exports = {
    name: 'content',
    create: create,
    retrieve: retrieve,
    update: update,
    del: del,
    clear: clear
  };

});

;/*!module/pwb/data.js*/
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

;/*!module/pwb/dataio.js*/
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

;/*!module/pwb/passwd.js*/
define('module/pwb/passwd', function(require, exports, module) {

  'use strict';
  
  // 加解密模块
  
  module.exports = {
    name: 'passwd'
  };

});

;/*!module/pwb/people.js*/
define('module/pwb/people', function(require, exports, module) {

  'use strict';
  
  // 用户模块
  
  module.exports = {
    name: 'people'
  };

});

;/*!module/pwb/index.js*/
define('module/pwb/index', function(require, exports, module) {

  'use strict';
  
  // pwb: passwordbook
  
  var content = require('module/pwb/content'),
      data = require('module/pwb/data'),
      dataio = require('module/pwb/dataio'),
      passwd = require('module/pwb/passwd'),
      people = require('module/pwb/people'),
      init,
      save,
      load,
      clear;
  
  init = function init() {
    load();
  };
  
  save = function save() {
    data.save(content.retrieve());
  };
  
  load = function load() {
    data.load().forEach(function (e) {
      content.create(e);
    });
  };
  
  clear = function clear() {
    data.clear();
    content.clear();
  };
  
  module.exports = {
    name: 'pwb',
    modules: {
      content: content,
      data: data,
      dataio: dataio,
      passwd: passwd,
      people: people
    },
    init: init,
    save: save,
    load: load,
    clear: clear
  };

});
