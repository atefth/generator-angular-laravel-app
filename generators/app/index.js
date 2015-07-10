'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  init: function () {
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the premium ' + chalk.red('CustomApp') + ' generator!'
      ));

    var prompts = [{
      type: 'input',
      name: 'name',
      message: 'What should we call the app?',
      default: this.appName
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;
      this.appName = this.props.name;
      this.destinationRoot(this.destinationRoot()+'/'+this.appName);
      this.appDir = this.destinationRoot()+'/app';
      this.config.set('appName', this.appName);
      this.config.set('appDir', this.appDir);
      this.config.set('modules', []);
      console.log(this.appDir);

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        { name: this.appName }
        );
      this.fs.copy(
        this.templatePath('_.bowerrc'),
        this.destinationPath('.bowerrc')
        );
      this.fs.copy(
        this.templatePath('_Gruntfile.js'),
        this.destinationPath('Gruntfile.js')
        );
      this.fs.copyTpl(
        this.templatePath('_bower.json'),
        this.destinationPath('bower.json'),
        { name: this.appName }
        );
    },

    assets: function () {
      this.fs.copy(
        this.templatePath('_main.css'),
        this.destinationPath('assets/css/app.css')
        );
    },

    build: function () {
      this.fs.copyTpl(
        this.templatePath('_header.html'),
        this.destinationPath('views/commons/header.html'),
        { name: this.appName }
        );
      this.fs.copy(
        this.templatePath('_footer.html'),
        this.destinationPath('views/commons/footer.html')
        );
      this.fs.copy(
        this.templatePath('_home.html'),
        this.destinationPath('views/commons/home.html')
        );
    },

    angular: function () {
      this.fs.copyTpl(
        this.templatePath('_routes.js'),
        this.destinationPath('app/routes.js'),
        { name: this.appName }
        );
      this.fs.copyTpl(
        this.templatePath('_app.js'),
        this.destinationPath('app/app.js'),
        { name: this.appName }
        );
      this.fs.copyTpl(
        this.templatePath('_controllers.js'),
        this.destinationPath('app/controllers.js'),
        { name: this.appName }
        );
      this.fs.copyTpl(
        this.templatePath('_Controller.js'),
        this.destinationPath('app/controllers/HomeCtrl.js'),
        { name: this.appName }
        );
    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
        );
      this.fs.copy(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc')
        );
    }
  },

  install: function () {
    this.installDependencies();
  }
});
