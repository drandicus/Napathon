'use strict';

angular.module('napathonApp')
  .controller('MainCtrl', function ($scope, $firebase) {	
    var locRef = new Firebase("https://napathon.firebaseio.com/locations");
	var chatRef = new Firebase("https://napathon.firebaseio.com");
	
	$scope.locations = $firebase(locRef);
	
	$scope.masterSpot = {};
	
	$scope.sessionUser = false;
	
	var geocoder = new google.maps.Geocoder();
	
	var auth = new FirebaseSimpleLogin(chatRef, function(error, user) {
		console.log('here at 15');
		if (error) {
		  console.log(error);
		} else if (user) {
		  console.log('User ID: ' + user.uid + ', Provider: ' + user.provider);
		  $scope.sessionUser = true;
		} else {
			console.log("logged out");
		}
	});
	
	$scope.map = {
	    center: {
	        latitude: 40.109739,
	        longitude: -88.227315
	    },
	    zoom: 15
	};
	
	$scope.processForm = function() {
		
		geocoder.geocode( {'address': $scope.spot.address}, function(){
			if (status == google.maps.GeocoderStatus.OK){
				var latlong = results[0].geometry.location;
				$scope.map.center = latlong;
				var marker = new google.maps.Marker({
					map:$scope.map,
					position: latlong
				});
				
				$scope.spot.latitude = results[0].geometry.location.latitude;
				$scope.spot.longitude = results[0].geometry.location.longitude;
				
				$scope.locations.$add($scope.spot);
				
				$scope.spot = {}
			} else {
				alert("Address Not Found, Please Try Again");
			}
		});
	}
	
	$scope.login = function() {
		auth.login('facebook');
	}
	
	
	
  });
