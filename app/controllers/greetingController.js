
angular.module('greeting', []).controller('greetingController', function($scope, timeService) {
	
	var timeOfDay = timeService.getTimeOfDay();
	
	$scope.companyName = 'WFIS (Wells Fargo)';
	$scope.teamName = 'EGS';

	$scope.greeting = 'Good ' + timeOfDay;
})
