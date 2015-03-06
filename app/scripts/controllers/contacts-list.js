'use strict';

angular.module('dz4.contacts-list', ['ngRoute'])

// Declared route
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/contacts-list', {
			templateUrl: 'views/contacts-list.html',
			controller: 'ContactsListController'
		});
	}])

// Contacts List controller
	.controller('ContactsListController', [function() {

	}]);