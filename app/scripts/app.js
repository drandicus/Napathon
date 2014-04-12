'use strict';

angular
  .module('napathonApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
	'ui.bootstrap',
	'firebase',
	'google-maps'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
