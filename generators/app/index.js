'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  init: function () {
    this.destinationRoot(this.destinationRoot()+'/'+this.appName);
  },
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay('Welcome to the premium ' + chalk.red('Angular + Laravel') + ' app generator!'));

    var prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'What should we call the app?',
        default: this.appName
      },
      {
        type: 'input',
        name: 'description',
        message: 'How should we decribe the app?',
        default: this.appDescription
      }
    ];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;
      this.appName = this.props.name;
      this.destinationRoot(this.destinationRoot()+'/'+this.appName);
      this.appDescription = this.props.description;
      this.config.set('appName', this.appName);
      this.config.save();

      done();
    }.bind(this));
  },
  configuring: {
    laravel: function () {
      this.log(yosay('Please wait while ' + chalk.red('Laravel') + ' is being installed!'));
      this.destinationRoot(this.destinationRoot()+'/../');
      var done = this.async();
      var composer = this.spawnCommand('composer', ['create-project', '--prefer-dist', 'laravel/laravel', this.appName]);
      composer.on('close', function (argument) {
        this.emit('removeWelcomeFile');
      }.bind(this));
      this.on('removeWelcomeFile', function(){
        this.log(yosay('Removing default welcome.blade.php file..'));
        var rm = this.spawnCommand('rm', ['-rf', this.appName + '/resources/views/welcome.blade.php']);
        rm.on('close', function (argument) {
          done();
        });
      });
    }
  },
  writing: {
    init: function () {
      this.log(yosay('Generating angular app files..'));
      this.destinationRoot(this.destinationRoot()+'/../client');
      this.log(this.destinationRoot());
    },
    app: function () {
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        { name: this.appName, description: this.appDescription }
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
        { name: this.appName, description: this.appDescription }
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
        this.templatePath('_welcome.blade.php'),
        this.destinationPath('../'+this.appName+'/resources/views/welcome.blade.php'),
        { name: this.appName }
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
        this.templatePath('_factories.js'),
        this.destinationPath('app/factories.js'),
        { name: this.appName }
        );
      this.fs.copyTpl(
        this.templatePath('_services.js'),
        this.destinationPath('app/services.js'),
        { name: this.appName }
        );
      this.fs.copyTpl(
        this.templatePath('_controller.js'),
        this.destinationPath('app/controllers/homeCtrl.js'),
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
  },

  end: {
    move: function () {
      this.log(yosay('Moving files into their directories!'));
      this.destinationRoot('../');
      var done = this.async();
      var mv = this.spawnCommand('mv', ['client', this.appName + '/public']);
      mv.on('close', function (argument) {
        this.emit('cleanUp');
      });
    }
  }
});
