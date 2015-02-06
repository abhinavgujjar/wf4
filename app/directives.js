app.directive('greeting', function(){
	return {
		restrict : 'E',
		templateUrl : 'partials/greeting.html',
		controller : 'greetingController'
	}
})

app.directive('nav', function(){
	return {
		restrict : 'E',
		templateUrl : 'partials/nav.html',
		controller : 'navController'
	}
})