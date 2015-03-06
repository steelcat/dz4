var dz4 = angular.module('dz4', [
	'ngRoute',
	'firebase'
])
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
			.when('/', {
			templateUrl: 'views/contacts-list.html',
			controller: 'ContactsListController'
		});
}]);