'use strict';

angular.module('dz4', [
	'ngRoute',
	'dz4.contacts-list'
]).
	config(['$routeProvider', function($routeProvider) {
		$routeProvider.otherwise({
			redirectTo: '/contacts-list'
		});
	}]);