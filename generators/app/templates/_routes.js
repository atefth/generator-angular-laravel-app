/**
* <%= name %> Module
*
* Routes File
*/
angular.module('<%= name %>')
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: 'views/commons/home.html'
	});

}])