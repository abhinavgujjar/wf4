//register and declare a module
var app = angular.module('wfis', ['greeting', 'voting', 'ngRoute', 'ngSanitize']); //empty braces denote no dependencies on other modules!


app.config(function(votingServiceProvider, $routeProvider){
	votingServiceProvider.setIncrement(6);

	$routeProvider.when('/home', {
		templateUrl : 'partials/home.html',
		controller : function($scope, $location){
			$scope.goListing = function(){
				$location.url('/listing')
			}
		}
	});

	$routeProvider.when('/listing', {
		templateUrl : 'partials/listing.html'
	});


	$routeProvider.when('/new', {
		templateUrl : 'partials/new.html',
		controller:  'addController'
	});



})	

app.factory('forex' , function(){
	return {
		getRate : function(){
			var random = Math.floor((Math.random() * 10) + 1);

			var rate = 50 + random;

			return rate;
		}
	}
})




//value service
app.value('uiConfig', {
	textLimit: 200,
	numberOfItems: 5,
	expensive: 10000,
	increment : 3
});
