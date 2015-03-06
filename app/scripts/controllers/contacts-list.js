dz4.controller('ContactsListController', function ($scope,$firebaseObject) {
	var ref = new Firebase("https://loftdz4.firebaseio.com/contacts"),
		firebase = $firebaseObject(ref);
	$scope.contacts = firebase;
});