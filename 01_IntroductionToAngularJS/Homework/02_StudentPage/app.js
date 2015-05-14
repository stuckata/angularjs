(function () {
	'use strict';

	var app = angular.module('app', []);

	app.controller('studentsController', function ($scope, $http) {
		$http.get('students.json')
			.success(function (data) {
			$scope.allStudents = data;
		})
			.error(console.log("Error"));
	});
})();

