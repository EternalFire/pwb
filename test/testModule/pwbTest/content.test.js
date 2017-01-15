var content = require('../../module/pwb/content');
var expect = require('chai').expect;

var showContent = function() {
  console.log('showContent', content.retrieve());
};

describe.only('content module', function() {
  
  // 每个测试用例执行开始前
  beforeEach(function() {
    console.log('\nbeforeEach ---------- ');
    showContent();
  });

  // 每个测试用例执行结束后
  afterEach(function() {
    showContent();
    console.log('afterEach -----------');
  });


  it('插入一条记录', function() {

    var record = {
      title: 'record001',
      tag: 'tag01',
      content: 'content001-content001-content001'
    };

    content.create(record);

    expect(content.retrieve().length).to.equal(1);
  });

  it('更新一条记录', function() {
    var records = content.retrieve();
    var aRecord = records[0];
    var newRecord = content.update({
      id: aRecord.id,
      content: 'this is a new content!!!',
      tag: 'newTag'
    });

    expect(newRecord.id).to.equal(aRecord.id);
    expect(newRecord.title).to.equal(aRecord.title);

    expect(newRecord.tag).to.not.equal(aRecord.tag);
    expect(newRecord.content).to.not.equal(aRecord.content);
  });

  it('删除一条记录', function() {
    var records = content.retrieve();
    var aRecord = records[0];

    console.log('del ', aRecord.id);

    content.del(aRecord);
    
    expect(content.retrieve().length).to.equal(0);
  });

  it('插入多条记录', function() {
    content.create({
      title: 'record002',
      content: 'record002-content'
    });

    content.create({
      title: 'record003',
      content: 'record003-content'
    });

    content.create({
      title: 'record004',
      content: 'record004-content'
    }); 

    expect(content.retrieve().length).to.equal(3);
  });

  it('更新其中一条记录', function() {
    var aRecord = content.retrieve()[1];
    if (aRecord) {
      aRecord.content = 'content.test.js!!!!!'
      content.update(aRecord);

      expect(content.retrieve()[1].content).to.equal(aRecord.content);
    }
  });

  it('删除其中一条记录', function() {
    var records = content.retrieve();
    var aRecord = records[1];
    if (aRecord) {
      content.del(aRecord);

      expect(content.retrieve().length).to.equal(records.length - 1);
    }
  });

});