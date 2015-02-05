app.controller('favsController', function($scope, favsService){

	$scope.favs = favsService.favs;
	
})