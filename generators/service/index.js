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
      name: 'service',
      message: 'What should we call the service?',
      default: 'default'
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;
      this.serviceName = this.props.service;
      this.serviceDir = this.destinationRoot()+'/public/client/app/services';
      this.log(yosay(chalk.red(this.serviceName)));

      done();
    }.bind(this));
  },
  writing: {
    service: function () {
      this.destinationRoot(this.serviceDir);
      this.fs.copyTpl(
        this.templatePath('_service.js'),
        this.destinationPath(this.serviceName+'.js'),
        { name: this.appName, service: this.serviceName }
        );
      var hook = 'generated-services';
      this.destinationRoot(this.destinationRoot()+'/../../../../');
      var path = this.destinationPath('/resources/views/welcome.blade.php');
      var insert = '\n<script src="client/app/services/'+this.serviceName+'.js" type="text/javascript" charset="utf-8"></script>\n';
      wiring.appendToFile(path, hook, insert);
    }
  },

  install: function () {
  }
});
