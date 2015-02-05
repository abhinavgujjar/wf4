app.factory('favsService', function() {

	var favs = [];

	return {
		addToFavs: function(hotel) {
			if (favs.length < 3) {

				favs.push(hotel);
			} else {
				alert('maximum favorites reached');
			}
		},
		favs: favs
	}
})