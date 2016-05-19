'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  init: function () {
  },
  prompting: function () {
    var done = this.async();
    var prompts = [{
      type: 'input',
      name: 'controller',
      message: 'What should we call the controller?',
      default: 'default'
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;
      this.controllerName = this.props.controller;
      this.controllerDir = this.destinationRoot()+'/app/controllers';
      this.destinationRoot(this.controllerDir);
      this.log(yosay(chalk.red(this.controllerName)));

      done();
    }.bind(this));
  },

  writing: {
    controller: function () {
      this.fs.copyTpl(
        this.templatePath('_Controller.js'),
        this.destinationPath(this.controllerName+'Ctrl.js'),
        { name: this.config.get('appName'), controller: this.controllerName }
        );
    }
  },

  install: function () {
  }
});
