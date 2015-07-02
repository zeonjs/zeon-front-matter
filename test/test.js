var should = require('should');

describe('zeon-front-matter', function() {
  var zfm = require('../');

  // require
  describe('require', function () {
    it('var fm = require("zeon-front-matter");', function() {
      (typeof zfm).should.eql('function');
    });
  });

  // parse
  describe('parse', function () {
    it('无配置信息', function () {
      var str = [].join('\n');

      zfm.parse(str).should.eql({
        _content: ''
      });
    });
  });

});
