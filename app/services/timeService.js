
app.factory('timeService', function() {

	var service = {
		getTimeOfDay: function() {
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

			return timeOfDay;
		}
	};

	return service;
})
