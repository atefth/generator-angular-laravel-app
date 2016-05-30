angular.module('<%= name %>.directives')
.directive('<%= directive %>', [function(){
	return {
    restrict: 'A',
    transclude: true,
    scope: {

    },
    template: '<h1>I\'m the <%= directive %> Directive!</h2>'
    // templateUrl: 'path/to/your/file.html'
  };
}]);