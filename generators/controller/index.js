'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var wiring = require('html-wiring');

module.exports = yeoman.generators.Base.extend({
  init: function () {
    this.appName = this.config.get('appName');
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
      this.controllerDir = this.destinationRoot()+'/public/client/app/controllers';
      this.log(yosay(chalk.red(this.controllerName)));

      done();
    }.bind(this));
  },
  writing: {
    controller: function () {
      this.destinationRoot(this.controllerDir);
      this.fs.copyTpl(
        this.templatePath('_Controller.js'),
        this.destinationPath(this.controllerName+'Ctrl.js'),
        { name: this.appName, controller: this.controllerName }
        );
      var hook = 'generated-controllers';
      this.destinationRoot(this.destinationRoot()+'/../../../../');
      var path = this.destinationPath('/resources/views/welcome.blade.php');
      var insert = '\n<script src="client/app/controllers/'+this.controllerName+'Ctrl.js" type="text/javascript" charset="utf-8"></script>\n';
      wiring.appendToFile(path, hook, insert);
    }
  },

  install: function () {
  }
});
