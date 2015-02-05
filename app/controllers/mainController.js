	//defined the controller
	function mainController($scope, uiConfig, votingService, 
		favsService, $interval, forex, $http) {

		$scope.addToFavs = function(hotel) {
			favsService.addToFavs(hotel);
		}

		$interval(function(){
			$scope.rate = forex.getRate();
		},1000)

		$scope.expensive = uiConfig.expensive;
		$scope.textLimit = uiConfig.textLimit;

		$scope.next = function() {
			$scope.pageNumber++;
		}

		$scope.prev = function() {
			$scope.pageNumber--;
		}



		$scope.up = votingService.up;

		$scope.down = function(hotel) {
			votingService.down(hotel);
		}

		$scope.toggleMore = function(hotel) {
			hotel.more = !hotel.more;
		}

		$scope.numberItems = uiConfig.numberOfItems;
		$scope.pageNumber = 1;



		$scope.loading = true;
		$http.get('https://api.parse.com/1/classes/hotels',{
			headers : {
				'X-Parse-Application-Id' : '4Ed5phWiVdXfuQx9gbtQddrEVKyq9svszfMHFFAS',
				'X-Parse-REST-API-Key': 'wC5vH6e6WXnt5WpaNfO5w2FZCPnQYWDnQFHqGwtd'
			}
		}).success(function(data){
			$scope.hotels = data.results;
			$scope.loading = false;
		});

	}

	//register the controller
	app.controller('mainController', mainController);