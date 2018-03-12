


// Creación del módulo
var angularRoutingApp = angular.module('PaciApp', ['ngRoute']);

// Configuración de las rutas
angularRoutingApp.config(function($routeProvider) {

	$routeProvider
		.when('/', {
			templateUrl	: 'view/paci.html',
			controller 	: 'paci.Controller'
    	})
    	.when('/busqueda', {
			templateUrl	: 'view/busqueda.html',
			controller 	: 'busquedaController'
		})
		.otherwise({
			redirectTo: '/'
    	});
    
});

