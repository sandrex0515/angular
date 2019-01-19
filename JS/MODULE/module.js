var app = angular.module('myApp', ['ngRoute']);


app.config(function ($routeProvider){
    $routeProvider
    .when('/login',
    {
        controller: 'LoginController',
        templateUrl: './TEMPLATEs/login.html'
    })
    .when('/register',
    {
        controller: 'RegisterController',
        templateUrl: './TEMPLATEs/register.html'
    })
    .when('/home',
    {
        controller: 'LoginController',
        templateUrl: './TEMPLATEs/home.html'
    })

  
    .otherwise({redirectTo: '/login'});
});

