(function () {
	'use strict';

	angular.module('app', [])
		.controller('bindController', function ($scope) {

			$scope.submit = function () {
				$scope.imgSource = $scope.imgSrc;
			};
	});
})();
