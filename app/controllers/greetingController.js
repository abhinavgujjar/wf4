
angular.module('greeting', []).controller('greetingController', function($scope) {
	var timeOfDay = 'Morning';
	var hours = (new Date()).getHours();
	if (hours > 11) {
		timeOfDay = 'Afternoon'
	}
	if (hours > 16) {
		timeOfDay = 'Evening'
	}

	if (hours > 20) {
		timeOfDay = 'Night'
	}

	$scope.companyName = 'WFIS (Wells Fargo)';
	$scope.teamName = 'EGS';

	$scope.greeting = 'Good ' + timeOfDay;
})
