angular.module('wfis').controller('addController', function($scope, $http, messages) {

	$scope.messages = messages;
	$scope.saveHotel = function(newhotel) {
		//save it. don't care about the validation


	}

	$scope.images = [
		"http://i.imgur.com/dmlhhkU.jpg",
		"http://i.imgur.com/S54M0bj.jpg",
		"http://i.imgur.com/hZg00lq.jpg",
		"http://i.imgur.com/1jD7lgN.jpg",
		"http://i.imgur.com/U0KoJxh.jpg",
		"http://i.imgur.com/amBtxWl.jpg",
		"http://i.imgur.com/QhVORNH.jpg",
		"http://i.imgur.com/QhVORNH.jpg",
		"http://i.imgur.com/BIBuk43.jpg",
		"http://i.imgur.com/QezaFg8.jpg"
	];

	

	$scope.newHotel = {

	}

	$scope.addAmenity = function(amenity) {

		$scope.newHotel.amenities = $scope.newHotel.amenities || [];

		$scope.newHotel.amenities.push(angular.copy(amenity));

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