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
