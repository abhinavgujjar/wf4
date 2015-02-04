//register and declare a module
var app = angular.module('wfis', []); //empty braces denote no dependencies on other modules!


//defined the controller
function mainController($scope) {
	
	$scope.name = 'World';

	$scope.city = "Bangalore";
	$scope.country = "India";

	$scope.location = {
		city : 'Bangalore'
	}

	$scope.features = {
		lakes: true,
		ocean: false
	}

	$scope.description = "The capital of the Southern state of Karnataka, Bangalore, is situated halfway between the coasts in southern India. Today it is Asia's fastest growing international city. It is home to most of the high tech industries in India.Bangalore is being called as a 'byte-basket'. Not only that, is also home to some of India's premier scientific establishments. Having a suitable climate, gardens & parks, natural lakes, architectural landmarks, shopping malls, the best restaurants and pubs in this part of the globe. Bangalore is the ideal gateway to India and all the other electronic company around the world.";

	$scope.attractions = [{
		name: 'Wonderla Amusement Park',
		type: 'Amusement Park',
		address: 'Mysore Road',
		img: 'http://i.imgur.com/266xOmg.jpg'
	}, {
		name: 'Bannerghatta National Park',
		type: 'Nature',
		address: 'Bannerghatta Road',
		img: 'http://i.imgur.com/M892iXO.jpg'
	}, {
		name: 'Shivasamudram Falls',
		type: 'Nature',
		address: 'Mandya District',
		img: 'http://i.imgur.com/u5G8uRY.jpg'

	}, {
		name: 'Forum Mall',
		type: 'Malls',
		address: 'Koramangala',
		img: 'http://i.imgur.com/gbqjcTS.jpg'
	}]

	$scope.hotels = [{
		name: 'Clarks Exotica Resort & Spa',
		reviewsCount: 405,
		rating: 4,
		ranking: 37
	}, {
		name: 'Golden Palms Hotel & Spa',
		reviewsCount: 405,
		rating: 4,
		ranking: 37
	}, {
		name: 'The Elanza Hotel',
		reviewsCount: 405,
		rating: 4,
		ranking: 37
	}, {
		name: 'Confident Amoon Glamour Resort +Spa',
		reviewsCount: 405,
		rating: 4,
		ranking: 37
	}]


	

}

//register the controller
app.controller('mainController', mainController);

app.controller('secondController', function($scope) {
	$scope.companyName = 'WFIS';
})