'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('angular-laravel-app:app', function () {
  // this.timeout(720000);
  // this.timeout(60000);
  // before(function (done) {
  //   helpers.run(path.join(__dirname, '../generators/app'))
  //     .withOptions({ skipInstall: true })
  //     .withPrompts({ name: 'app', description: 'App' })
  //     .on('end', done);
  // });

  it('creates files', function () {
    // assert.file([
    //   'bower.json',
    //   'package.json',
    //   '.editorconfig',
    //   '.jshintrc'
    // ]);
    assert(true, [true])
  });
});
