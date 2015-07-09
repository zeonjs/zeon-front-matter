'use strict';

var chai = require('chai');
var should = chai.should();

describe('zeon-front-matter', function() {
  var zfm = require('../');

  // require
  describe('require', function () {
    it('var fm = require("zeon-front-matter");', function() {
      (typeof zfm).should.eql('function');
    });
  });

  // split
  describe('split', function () {
    it('empty content', function () {
      var str = [].join('\n');

      zfm.split(str).should.eql({
        content: ''
      });
    });

    it('no data', function () {
      var str = [
        'foo',
        'bar'
      ].join('\n');

      zfm.split(str).should.eql({
        content: str
      });
    });

    it('yaml mode with normal separator', function () {
      var str = [
        '---',
        'foo',
        '---',
        'bar'
      ].join('\n');

      zfm.split(str).should.eql({
        data: 'foo',
        content: 'bar',
        separator: '---'
      });
    });

    it('yaml mode with long separator', function () {
      var str = [
        '---------',
        'foo',
        '---------',
        'bar'
      ].join('\n');

      zfm.split(str).should.eql({
        data: 'foo',
        content: 'bar',
        separator: '---------'
      });
    });

    it('yaml mode with invalid separator', function () {
      var str = [
        '--',
        'foo',
        '----',
        'bar'
      ].join('\n');

      zfm.split(str).should.eql({
        content: str
      });
    });

    it('comments mode', function () {
      var str = [
        '<!--[conf.yaml]',
        'foo',
        '[conf.yaml]-->',
        'bar'
      ].join('\n');

      zfm.split(str).should.eql({
        data: 'foo',
        content: 'bar',
        separator: 'yaml'
      });
    });

    it('comments mode without type', function () {
      var str = [
        '<!--[conf]',
        'foo',
        '[conf]-->',
        'bar'
      ].join('\n');

      zfm.split(str).should.eql({
        content: str
      });
    });
  });

  // parse
  describe('parse', function () {
    it('empty content', function () {
      var str = [].join('\n');

      zfm.parse(str).should.eql({
        _content: ''
      });
    });

    it('yaml mode', function () {
      var str = [
        '---',
        'layout: base',
        '---',
        'bar'
      ].join('\n');

      zfm.parse(str).should.eql({
        layout: 'base',
        _content: 'bar'
      });
    });

  });

});
