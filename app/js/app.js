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
        .when('/a-z', {
            templateUrl: 'views/a-z.html'
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
        .when('/m', {
            templateUrl: 'views/countries/m.html'
        })
        .when('/n', {
            templateUrl: 'views/countries/n.html'
        })
        .when('/o', {
            templateUrl: 'views/countries/o.html'
        })
        .when('/p', {
            templateUrl: 'views/countries/p.html'
        })
        .when('/q', {
            templateUrl: 'views/countries/q.html'
        })
        .when('/r', {
            templateUrl: 'views/countries/r.html'
        })
        .when('/s', {
            templateUrl: 'views/countries/s.html'
        })
        .when('/t', {
            templateUrl: 'views/countries/t.html'
        })
        .when('/u', {
            templateUrl: 'views/countries/u.html'
        })
        .when('/v', {
            templateUrl: 'views/countries/v.html'
        })
        .when('/w', {
            templateUrl: 'views/countries/w.html'
        })
        .when('/y', {
            templateUrl: 'views/countries/y.html'
        }).when('/z', {
            templateUrl: 'views/countries/z.html'
        })

        // 'A' countries
        .when('/afghanistan', {
            templateUrl: 'views/countries-info/afghanistan.html'
        })
        .when('/albania', {
            templateUrl: 'views/countries-info/albania.html'
        })
        .when('/algeria', {
            templateUrl: 'views/countries-info/algeria.html'
        })
        .when('/andorra', {
            templateUrl: 'views/countries-info/andorra.html'
        })
        .when('/angola', {
            templateUrl: 'views/countries-info/angola.html'
        })
        .when('/antigua_and_barbuda', {
            templateUrl: 'views/countries-info/antigua_and_barbuda.html'
        })
        .when('/argentina', {
            templateUrl: 'views/countries-info/argentina.html'
        })
        .when('/armenia', {
            templateUrl: 'views/countries-info/armenia.html'
        })
        .when('/australia', {
            templateUrl: 'views/countries-info/australia.html'
        })
        .when('/austria', {
            templateUrl: 'views/countries-info/austria.html'
        })
        .when('/azerbaijan', {
            templateUrl: 'views/countries-info/azerbaijan.html'
        })


        // 'B' countries
        .when('/bahamas', {
            templateUrl: 'views/countries-info/bahamas.html'
        })
        .when('/bahrain', {
            templateUrl: 'views/countries-info/bahrain.html'
        })
        .when('/bangladesh', {
            templateUrl: 'views/countries-info/bangladesh.html'
        })
        .when('/barbados', {
            templateUrl: 'views/countries-info/barbados.html'
        })
        .when('/belarus', {
            templateUrl: 'views/countries-info/belarus.html'
        })
        .when('/belgium', {
            templateUrl: 'views/countries-info/belgium.html'
        })
        .when('/belize', {
            templateUrl: 'views/countries-info/belize.html'
        })
        .when('/benin', {
            templateUrl: 'views/countries-info/benin.html'
        })
        .when('/bhutan', {
            templateUrl: 'views/countries-info/bhutan.html'
        })
        .when('/bolivia', {
            templateUrl: 'views/countries-info/bolivia.html'
        })
        .when('/bosnia', {
            templateUrl: 'views/countries-info/bosnia.html'
        })
        .when('/botswana', {
            templateUrl: 'views/countries-info/botswana.html'
        })
        .when('/brazil', {
            templateUrl: 'views/countries-info/brazil.html'
        })
        .when('/brunei', {
            templateUrl: 'views/countries-info/brunei.html'
        })
        .when('/bulgaria', {
            templateUrl: 'views/countries-info/bulgaria.html'
        })
        .when('/burkina', {
            templateUrl: 'views/countries-info/burkina.html'
        })
        .when('/burundi', {
            templateUrl: 'views/countries-info/burundi.html'
        })


        //'C' countries
        .when('/cambodia', {
            templateUrl: 'views/countries-info/cambodia.html'
        })
        .when('/cameroon', {
            templateUrl: 'views/countries-info/cameroon.html'
        })
        .when('/canada', {
            templateUrl: 'views/countries-info/canada.html'
        })
        .when('/cape-verde', {
            templateUrl: 'views/countries-info/cape-verde.html'
        })
        .when('/centralAfricanRepublic', {
            templateUrl: 'views/countries-info/centralAfricanRepublic.html'
        })
        .when('/chad', {
            templateUrl: 'views/countries-info/chad.html'
        })
        .when('/chile', {
            templateUrl: 'views/countries-info/chile.html'
        })
        .when('/china', {
            templateUrl: 'views/countries-info/china.html'
        })
        .when('/colombia', {
            templateUrl: 'views/countries-info/colombia.html'
        })
        .when('/comoros', {
            templateUrl: 'views/countries-info/comoros.html'
        })
        .when('/congo', {
            templateUrl: 'views/countries-info/congo.html'
        })
        .when('/congo-democratic', {
            templateUrl: 'views/countries-info/congo-democratic.html'
        })
        .when('/costarica', {
            templateUrl: 'views/countries-info/costarica.html'
        })
        .when('/cote', {
            templateUrl: 'views/countries-info/cote.html'
        })
        .when('/croatia', {
            templateUrl: 'views/countries-info/croatia.html'
        })
        .when('/cuba', {
            templateUrl: 'views/countries-info/cuba.html'
        })
        .when('/cyprus', {
            templateUrl: 'views/countries-info/cyprus.html'
        })
        .when('/czech', {
            templateUrl: 'views/countries-info/czech.html'
        })

        //'D' countries
        .when('/denmark', {
            templateUrl: 'views/countries-info/denmark.html'
        })
        
        .otherwise({
            redirectTo: '/'
        });
}]);
