app.controller('navController', function($scope, $location, $window){

	$scope.$on('$routeChangeSuccess', function(event, args){
		$scope.activePath = $location.$$path;
	})

	
})