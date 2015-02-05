
app.factory('votingService', function(uiConfig) {


	//return the service
	return {
		up: function(hotel) {
			hotel.rating += uiConfig.increment;
		},
		down: function(hotel) {
			hotel.rating = hotel.rating || 0;

			if (hotel.rating > 0) {
				hotel.rating--;
			}
		}
	}

})
