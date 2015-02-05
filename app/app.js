//register and declare a module
var app = angular.module('wfis', ['greeting']); //empty braces denote no dependencies on other modules!


//value service
app.value('uiConfig', {
	textLimit: 200,
	numberOfItems: 5,
	expensive: 10000
});


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
		var output = input.slice((pageNumber - 1) * numberOfItems, (pageNumber * numberOfItems));

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