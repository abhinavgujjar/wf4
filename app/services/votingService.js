angular.module('voting', []).provider('votingService',

 function() {

	//return the service
	var _increment = 1;

	this.setIncrement = function(value){
		_increment = value;
	}

	this.$get =  function() {
		return {
			up: function(hotel) {
				hotel.rating += _increment;
			},
			down: function(hotel) {
				hotel.rating = hotel.rating || 0;

				if (hotel.rating > 0) {
					hotel.rating--;
				}
			}
		}
	}

})