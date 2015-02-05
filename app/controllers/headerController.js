app.controller('headerController', function($scope, $timeout){
	$scope.$on('hotelAdded', function(event, arg){
		$scope.action = 'new hotel added!';

		$timeout(function(){
			$scope.action = '';			
		}, 5000);
	})
})