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
      name: 'directive',
      message: 'What should we call the directive?',
      default: 'default'
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;
      this.directiveName = this.props.directive;
      this.directiveDir = this.destinationRoot()+'/public/client/app/directives';
      this.log(yosay(chalk.red(this.directiveName)));

      done();
    }.bind(this));
  },
  writing: {
    directive: function () {
      this.destinationRoot(this.directiveDir);
      this.fs.copyTpl(
        this.templatePath('_directive.js'),
        this.destinationPath(this.directiveName+'.js'),
        { name: this.appName, directive: this.directiveName }
        );
      var hook = 'generated-directives';
      this.destinationRoot(this.destinationRoot()+'/../../../../');
      var path = this.destinationPath('/resources/views/welcome.blade.php');
      var insert = '\n<script src="client/app/directives/'+this.directiveName+'.js" type="text/javascript" charset="utf-8"></script>\n';
      wiring.appendToFile(path, hook, insert);
    }
  },

  install: function () {
  }
});
