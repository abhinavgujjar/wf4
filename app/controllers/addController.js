angular.module('wfis').controller('addController', function($scope) {
	$scope.addHotel = function(newhotel) {

		$scope.hotels.push({
			name: newhotel.name,
			price: newhotel.price
		});

		$scope.$emit('hotelAdded', newhotel);
	}


})