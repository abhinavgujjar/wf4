
app.factory('votingService', function() {

	function innerCalc(){
		
	}

	//return the service
	return {
		up: function(hotel) {
			hotel.rating++;
		},
		down: function(hotel) {
			hotel.rating = hotel.rating || 0;

			if (hotel.rating > 0) {
				hotel.rating--;
			}
		}
	}

})
