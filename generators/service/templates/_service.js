angular.module('<%= name %>.services')
.service('<%= service %>', ['$http', function($http){
	console.log('<%= service %> service loaded');
}]);