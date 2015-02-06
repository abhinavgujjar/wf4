angular.module('wfis').controller('addController', function($scope, $http, messages) {

	$scope.messages = messages;
	$scope.saveHotel = function(newhotel){
		//save it. don't care about the validation


	}
	$scope.addHotel = function(newhotel) {

		if ($scope.hotelsForm.$valid) {

			$http.post('https://api.parse.com/1/classes/hotels', newhotel, {
				headers: {
					'X-Parse-Application-Id': '4Ed5phWiVdXfuQx9gbtQddrEVKyq9svszfMHFFAS',
					'X-Parse-REST-API-Key': 'wC5vH6e6WXnt5WpaNfO5w2FZCPnQYWDnQFHqGwtd'
				}
			});


			$scope.$emit('hotelAdded', newhotel);
		} else {
			alert('not valid');
		}
	}


})