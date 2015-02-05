app.filter('numberToArray', function() {
	//return a function that can be applied for each value
	//input will be the value on which the filter has been applied
	return function(input) {
		return new Array(input);
	}
});

app.filter('paginate', function() {
	return function(input, numberOfItems, pageNumber) {
		//should select the correct page and give back 
		output = input;
		if (input) {
			var output = input.slice((pageNumber - 1) * numberOfItems, (pageNumber * numberOfItems));
		}
		return output;
	}
})


app.filter('traditionalize', function() {
	//return a function that can be applied for each value
	//input will be the value on which the filter has been applied
	return function(input) {
		return input ? input.replace('Bangalore', 'Bengaluru') : input;
	}
});