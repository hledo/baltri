angular.module("mainApp", [])
.controller("mainCtrl", function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    $scope.section = "nosotros";
    $scope.sectionChange = function (e) {
    	$scope.section = e.currentTarget.id;
    };

})
