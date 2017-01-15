!function() {
  
  var expect = chai.expect;

  var 
    dataKey = 'dataKey',

    init,
    save,
    load
  ;

  save = (array) => {
    var str = JSON.stringify(array);
    localStorage.setItem(dataKey, str);
    return str;
  };

  load = () => {
    var str = localStorage.getItem(dataKey);
    return JSON.parse(str);
  };

  describe('data module', function() {

    it('test save and load', function() {
      var array = [ 
        { title: 'title_1', content: 'content_1' },
        { title: 'title_2', content: 'content_2' },
        { title: 'title_3', content: 'content_3' },
      ];

      var arrayStr = save(array);

      var result = JSON.stringify(load());
      
      console.log('arrayStr', arrayStr);
      console.log('load', result);

      expect(arrayStr).to.equal(result);
    });



  });

}();