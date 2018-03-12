


// Creación del módulo
var angularRoutingApp = angular.module('PaciApp', ['ngRoute']);

// Configuración de las rutas
angularRoutingApp.config(function($routeProvider) {

	$routeProvider
		.when('/', {
			templateUrl	: 'view/paci.html',
			controller 	: 'paci.Controller'
    	})
    .when('/blog', {
			templateUrl	: 'view/blog.html',
			controller 	: 'blog.Controller'
    })
    .when('/checkMail', {
			templateUrl	: 'view/check_mail.html',
			controller 	: 'checkMail.Controller'
    })
    .when('/contact', {
			templateUrl	: 'view/contact.html',
			controller 	: 'contact.Controller'
    })
    .when('/login', {
			templateUrl	: 'view/login.html',
			controller 	: 'login.Controller'
    })
    .when('/newAccount', {
			templateUrl	: 'view/new-account.html',
			controller 	: 'newAccount.Controller'
		})
		.otherwise({
			redirectTo: '/'
    });
    
});

