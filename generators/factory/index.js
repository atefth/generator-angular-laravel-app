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
      name: 'factory',
      message: 'What should we call the factory?',
      default: 'default'
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;
      this.factoryName = this.props.factory;
      this.factoryDir = this.destinationRoot()+'/public/client/app/factories';
      this.log(yosay(chalk.red(this.factoryName)));

      done();
    }.bind(this));
  },
  writing: {
    factory: function () {
      this.destinationRoot(this.factoryDir);
      this.fs.copyTpl(
        this.templatePath('_factory.js'),
        this.destinationPath(this.factoryName+'.js'),
        { name: this.appName, factory: this.factoryName }
        );
      var hook = 'generated-factories';
      this.destinationRoot(this.destinationRoot()+'/../../../../');
      var path = this.destinationPath('/resources/views/welcome.blade.php');
      var insert = '\n<script src="client/app/factories/'+this.factoryName+'.js" type="text/javascript" charset="utf-8"></script>\n';
      wiring.appendToFile(path, hook, insert);
    }
  },

  install: function () {
  }
});
