//register and declare a module
		var app = angular.module('wfis', []); //empty braces denote no dependencies on other modules!

		//defined the controller
		function mainController($scope){
			$scope.companyName = 'Wells Fargo';

			var timeOfDay = 'Morning';
			var hours = (new Date()).getHours();

			if ( hours >= 11)
			{
				timeOfDay = "Late Morning";
			}

			if ( hours >= 13)
			{
				timeOfDay = "Afternoon";
			}

			if ( hours >= 17)
			{
				timeOfDay = "Evening";
			}

			if ( hours >= 20)
			{
				timeOfDay = "Night";
			}

			$scope.timeOfDay = timeOfDay;

			$scope.lct = "Bangalore";

		}

		//register the controller
		app.controller('mainController', mainController);

		app.controller('secondController', function($scope){
			$scope.companyName = 'WFIS';
		})