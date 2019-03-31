angular.module("mainApp", [])
.controller("mainCtrl", function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    $scope.section = "nosotros";


    $scope.articles = [
    	{
    		name: "Llavero Baltri",
    		picture: "img/baltri_llavero.png",
    		description: ""
    	},
    	{
    		name: "Tank top La Fuerza",
    		picture: "img/lafuerza_tank.png",
    		description: ""
    	},
    	{
    		name: "Pin Crika",
    		picture: "img/crika_pin.png",
    		description: ""
    	},
    	{
    		name: "Tshirt Te Dije 100 Mil Dolare",
    		picture: "img/tedije100mil_tshirt.png",
    		description: ""
    	},
    	{
    		name: "Pack de Stickers",
    		picture: "img/stickerpack.png",
    		description: ""
    	},
    	{
    		name: "Carteras Varias",
    		picture: "img/carteras.png",
    		description: ""
    	}

    ];



    $scope.sectionChange = function (e) {
    	$scope.section = e.currentTarget.id;
    };

})
