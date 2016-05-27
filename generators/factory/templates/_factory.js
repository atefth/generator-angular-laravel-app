angular.module('<%= name %>.factories')
.factory('<%= factory %>', ['$http', function($http){
	console.log('<%= factory %> factory loaded');
}]);