app.controller('navController', function($scope, $location){

	$scope.$on('$routeChangeSuccess', function(event, args){
		$scope.activePath = $location.$$path;

	})

})