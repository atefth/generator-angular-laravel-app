/**
* <%= name %> Module
*
* Scaffolded Custom App
*/
angular.module('<%= name %>', ['ngRoute', 'ui.router', '<%= name %>.controllers', '<%= name %>.factories', '<%= name %>.services'])
.config(function() {
	console.log('booted');
});