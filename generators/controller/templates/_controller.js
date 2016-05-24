angular.module('<%= name %>.controllers')
.controller('<%= controller %>Ctrl', ['$scope', function($scope){
	$scope.color = 'blue';
	console.log('color changed to blue');
}]);