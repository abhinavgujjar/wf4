angular.module('greeting', []).controller('greetingController',

	function($scope, timeService, $interval) {

		var timeOfDay = timeService.getTimeOfDay();

		$scope.companyName = 'WFIS (Wells Fargo)';
		$scope.teamName = 'EGS';

		$scope.greeting = 'Good ' + timeOfDay;

		var now = (new Date).getTime();
		var wc = (new Date('Feb 14 2015')).getTime();
		$scope.secondsForWorldCup = (wc - now) / 1000;

		$interval(function() {

			var now = (new Date).getTime();
			$scope.secondsForWorldCup = (wc - now) / 1000;

		}, 1000);
	})