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
	.controller('ContactsListController', function ($scope) {
		$scope.contacts = [
			{
				'id' : '1',
				'name': 'Вася',
				'secname' : 'Пряников',
				'tel' : '+7 911 234 56 66',
				'mail' : 'mdo@gmail.com'
			},
			{
				'id' : '2',
				'name': 'Коля',
				'secname' : 'Иванов',
				'tel' : '+7 911 234 56 66',
				'mail' : 'kivan@gmail.com'
			},
			{
				'id' : '3',
				'name': 'Оля',
				'secname' : 'Птичкина',
				'tel' : '+7 911 234 56 66',
				'mail' : 'birdy@gmail.com'
			},
			{
				'id' : '4',
				'name': 'Дима',
				'secname' : 'Громов',
				'tel' : '+7 911 234 56 66',
				'mail' : 'grom@gmail.com'
			},
			{
				'id' : '5',
				'name': 'Даша',
				'secname' : 'Косичкина',
				'tel' : '+7 911 234 56 66',
				'mail' : 'hosich@gmail.com'
			},
			{
				'id' : '6',
				'name': 'Ира',
				'secname' : 'Иванова',
				'tel' : '+7 911 234 56 66',
				'mail' : 'irai@gmail.com'
			},
			{
				'id' : '7',
				'name': 'Илья',
				'secname' : 'Гробов',
				'tel' : '+7 911 234 56 66',
				'mail' : 'grobov@gmail.com'
			},
			{
				'id' : '8',
				'name': 'Дима',
				'secname' : 'Громов',
				'tel' : '+7 911 234 56 66',
				'mail' : 'grom@gmail.com'
			}
		];

	});