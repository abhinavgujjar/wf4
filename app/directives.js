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
		controller: 'addController'
	}
})

app.directive('favs', function() {
	return {
		restrict: 'E',
		templateUrl: 'partials/favs.html',
		controller: 'favsController'
	}
})

app.directive('panel', function() {
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'partials/panel.html',
		scope: {
			heading: '@',
			modifier: '@'
		}
	}
});

app.directive('zoom', function() {
	return {
		restrict: 'A',
		link: function(scope, element, attr, ctrl) {


			element.on('mouseenter', function() {

				element.css({
					'font-size': '42px'
				});

			})
		}
	}
});

app.directive('onlyEven', function() {
	return {
		restrict: 'A',
		require: 'ngModel',
		link: function(scope, element, attr, ctrl) {
			ctrl.$parsers.unshift(checkForEven);

			function checkForEven(viewValue) {
				if (parseInt(viewValue) % 2 === 0) {
					ctrl.$setValidity('evenNumber', true);
				} else {
					ctrl.$setValidity('evenNumber', false);
				}
				return viewValue;
			}
		}
	}
})

app.directive('carousel', function() {
	return {
		restrict: 'E',
		templateUrl: 'partials/carousel.html',
		scope: {
			images: '=images',
			selectedImage: '='
		},
		controller: function($scope) {
			$scope.index = 0;

			$scope.next = function() {
				$scope.index++;
				if ($scope.index >= $scope.images.length) {
					$scope.index = 0;
				}

				$scope.selectedImage = $scope.images[$scope.index];
			}

			$scope.prev = function() {
				$scope.index--;
				if ($scope.index < 0) {
					$scope.index = $scope.images.length - 1;
				}

				$scope.selectedImage = $scope.images[$scope.index];
			}

			$scope.images
		}
	}
})