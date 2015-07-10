angular.module('<%= name %>.controllers')
.controller('HomeCtrl', ['$scope', function($scope){
	$scope.color = 'blue';
	console.log('color changed to blue');
}]);