app.directive('greeting', function(){
	return {
		restrict : 'E',
		templateUrl : 'partials/greeting.html',
		controller : 'greetingController'
	}
})

app.directive('navBar', function(){
	return {
		restrict : 'E',
		templateUrl : 'partials/nav.html',
		controller : 'navController'
	}
})

app.directive('previewText', function(){
	return {
		restrict : 'E',
		templateUrl : 'partials/preview.html',
		scope : {
			text : "=yyy",
			rows : '@numRows'
		}
	}
})