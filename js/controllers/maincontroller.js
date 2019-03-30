var mainApp = angular.module('mainApp');

mainApp.controller('mainCtrl', ['$location','$timeout', '$rootScope', '$window','$uibModal', function($location, $timeout, $rootScope, $window, $uibModal){
	var nav = this;

	$rootScope.$on('$routeChangeStart', function(){

		nav.navText = {
			login:"Iniciar Sesión",
			logout:"Cerrar Sesión",
			mainmenu:"Menú Principal",
			admin:"Administración",
			bill:"Facturación"
		}
	

	});



}])