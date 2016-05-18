'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('allCountries', ['ngRoute', 'ngResource', 'ngStorage'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/'});
    }]);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html'
        })
        .when('/a', {
            templateUrl: 'views/countries/a.html'
        })
        .when('/b', {
            templateUrl: 'views/countries/b.html'
        })
        .when('/c', {
            templateUrl: 'views/countries/c.html'
        })
        .when('/d', {
            templateUrl: 'views/countries/d.html'
        })
        .when('/e', {
            templateUrl: 'views/countries/e.html'
        })
        .when('/f', {
            templateUrl: 'views/countries/f.html'
        })
        .when('/g', {
            templateUrl: 'views/countries/g.html'
        })
        .when('/h', {
            templateUrl: 'views/countries/h.html'
        }) 
        .when('/i', {
            templateUrl: 'views/countries/i.html'
        })
        .when('/j', {
            templateUrl: 'views/countries/j.html'
        })
        .when('/k', {
            templateUrl: 'views/countries/k.html'
        })
        .when('/l', {
            templateUrl: 'views/countries/l.html'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
