//register and declare a module
var app = angular.module('wfis', ['greeting']); //empty braces denote no dependencies on other modules!



app.filter('numberToArray', function(){
	//return a function that can be applied for each value
	//input will be the value on which the filter has been applied
	return function(input){
		return new Array(input);
	}
})