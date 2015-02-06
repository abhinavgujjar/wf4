app.directive('greeting', function() {
	return {
		restrict: 'E',
		templateUrl: 'partials/greeting.html',
		controller: 'greetingController'
	}
})

app.directive('navBar', function() {
	return {
		restrict: 'E',
		templateUrl: 'partials/nav.html',
		controller: 'navController'
	}
})

app.directive('previewText', function() {
	return {
		restrict: 'E',
		templateUrl: 'partials/preview.html',
		scope: {
			text: "=yyy",
			rows: '@numRows'
		}
	}
})

app.directive('quickAdd', function() {
	return {
		restrict: 'E',
		templateUrl: 'partials/quick.html',
		controller : 'addController'
	}
})

app.directive('favs', function() {
	return {
		restrict: 'E',
		templateUrl: 'partials/favs.html',
		controller : 'favsController'
	}
})

app.directive('carousel', function() {
	return {
		restrict: 'E',
		templateUrl: 'partials/carousel.html',
		scope: {
			images : '=images',
			selectedImage : '='
		},
		controller: function($scope) {
			$scope.index = 0;

			$scope.next = function() {
				$scope.index++;
				if( $scope.index >= $scope.images.length){
					$scope.index = 0;
				}

				$scope.selectedImage = $scope.images[$scope.index];
			}

			$scope.prev = function() {
				$scope.index--;
				if ( $scope.index < 0 ){
					$scope.index = $scope.images.length - 1;
				}

				$scope.selectedImage = $scope.images[$scope.index];
			}

			$scope.images
		}
	}
})