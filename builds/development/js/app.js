//myApp is unrelated to the name of module actually, just a placeholder to contain module
var myApp = angular.module('myApp', ['ngRoute', 'appControllers']);

//var is a placeholder to contain the module we're creating
var appControllers = angular.module('appControllers', []);

myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/login', {
			templateUrl: 'views/login.html',
			controller: 'RegistrationController'
		}).
		when('/register', {
			templateUrl: 'views/register.html',
			controller: 'RegistrationController'
		}).
		when('/meetings', {
			templateUrl: 'views/meetings.html'
		}).
		otherwise({
			redirectTo: '/login'
		});
}]);