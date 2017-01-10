
// pwb: passwordbook

var 
  content = require('./content'),
  data = require('./data'),
  dataio = require('./dataio'),
  passwd = require('./passwd'),
  people = require('./people')

module.exports = {
  name: 'pwb',
  modules: {
    content: content,
    data: data,
    dataio: dataio,
    passwd: passwd,
    people: people
  }
};