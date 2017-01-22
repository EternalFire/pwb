
// pwb: passwordbook

var 
  content = require('./content'),
  data = require('./data'),
  dataio = require('./dataio'),
  passwd = require('./passwd'),
  people = require('./people'),

  init,
  save,
  load,
  clear
;

init = function() {
  load();
};

save = function() {
  data.save(content.retrieve());
};

load = function() {
  data.load().forEach((e) => {
    content.create(e);
  });
};

clear = function() {
  data.clear();
  content.clear();
}

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