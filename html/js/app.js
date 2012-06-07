'use strict';


// Declare app level module which depends on filters, and services
angular.module('DC', ['DC.filters', 'DC.services', 'DC.directives']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(false).hashPrefix('!');
    $routeProvider.when('/list', {template: 'partials/list.html', controller: ListCtrl});
    $routeProvider.when('/view/:nid', {template: 'partials/view.html', controller: NodeCtrl});
    $routeProvider.when('/edit/:nid', {template: 'partials/edit.html', controller: NodeCtrl});
    $routeProvider.when('/user', {template: 'partials/user.html', controller: UserCtrl});
    $routeProvider.otherwise({redirectTo: '/list'});
  }]);

