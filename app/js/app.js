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
        .when('/djibouti', {
            templateUrl: 'views/countries-info/djibouti.html'
        })
        .when('/dominica', {
            templateUrl: 'views/countries-info/dominica.html'
        })
        .when('/dominican-republic', {
            templateUrl: 'views/countries-info/dominican-republic.html'
        })

        //'E' countries
        .when('/ecuador', {
            templateUrl: 'views/countries-info/ecuador.html'
        })
        .when('/east-timor', {
            templateUrl: 'views/countries-info/east-timor.html'
        })
        .when('/egypt', {
            templateUrl: 'views/countries-info/egypt.html'
        })
        .when('/el-salvador', {
            templateUrl: 'views/countries-info/el-salvador.html'
        })
        .when('/england', {
            templateUrl: 'views/countries-info/england.html'
        })
        .when('/equatorial-guinea', {
            templateUrl: 'views/countries-info/equatorial-guinea.html'
        })
        .when('/eritrea', {
            templateUrl: 'views/countries-info/eritrea.html'
        })
        .when('/estonia', {
            templateUrl: 'views/countries-info/estonia.html'
        })
        .when('/ethiopia', {
            templateUrl: 'views/countries-info/ethiopia.html'
        })

        //'F' countries
        .when('/fiji', {
            templateUrl: 'views/countries-info/fiji.html'
        })
        .when('/finland', {
            templateUrl: 'views/countries-info/finland.html'
        })
        .when('/france', {
            templateUrl: 'views/countries-info/france.html'
        })

        //'G' countries
        .when('/gabon', {
            templateUrl: 'views/countries-info/gabon.html'
        })
        .when('/gambia', {
            templateUrl: 'views/countries-info/gambia.html'
        })
        .when('/georgia', {
            templateUrl: 'views/countries-info/georgia.html'
        })
        .when('/germany', {
            templateUrl: 'views/countries-info/germany.html'
        })
        .when('/ghana', {
            templateUrl: 'views/countries-info/ghana.html'
        })
        .when('/gb', {
            templateUrl: 'views/countries-info/gb.html'
        })
        .when('/greece', {
            templateUrl: 'views/countries-info/greece.html'
        })
        .when('/grenada', {
            templateUrl: 'views/countries-info/grenada.html'
        })
        .when('/guatemala', {
            templateUrl: 'views/countries-info/guatemala.html'
        })
        .when('/guinea', {
            templateUrl: 'views/countries-info/guinea.html'
        })
        .when('/guinea-bissau', {
            templateUrl: 'views/countries-info/guinea-bissau.html'
        })
        .when('/guyana', {
            templateUrl: 'views/countries-info/guyana.html'
        })

        //'H' countries
        .when('/haiti', {
            templateUrl: 'views/countries-info/haiti.html'
        })
        .when('/honduras', {
            templateUrl: 'views/countries-info/honduras.html'
        })
        .when('/hungary', {
            templateUrl: 'views/countries-info/hungary.html'
        })

        //'I' countries
        .when('/iceland', {
            templateUrl: 'views/countries-info/iceland.html'
        })
        .when('/india', {
            templateUrl: 'views/countries-info/india.html'
        })
        .when('/indonesia', {
            templateUrl: 'views/countries-info/indonesia.html'
        })
        .when('/iran', {
            templateUrl: 'views/countries-info/iran.html'
        })
        .when('/iraq', {
            templateUrl: 'views/countries-info/iraq.html'
        })
        .when('/ireland', {
            templateUrl: 'views/countries-info/ireland.html'
        })
        .when('/israel', {
            templateUrl: 'views/countries-info/israel.html'
        })
        .when('/italy', {
            templateUrl: 'views/countries-info/italy.html'
        })

        //'J' countries
        .when('/jamaica', {
            templateUrl: 'views/countries-info/jamaica.html'
        })
        .when('/japan', {
            templateUrl: 'views/countries-info/japan.html'
        })
        .when('/jordan', {
            templateUrl: 'views/countries-info/jordan.html'
        })

        //'K' countries
        .when('/kazakhstan', {
            templateUrl: 'views/countries-info/kazakhstan.html'
        })
        .when('/kenya', {
            templateUrl: 'views/countries-info/kenya.html'
        }) 
        .when('/kiribati', {
            templateUrl: 'views/countries-info/kiribati.html'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
