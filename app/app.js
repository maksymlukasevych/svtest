'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'angularGrid'
]).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
$locationProvider.html5Mode(true);
  $routeProvider.
  otherwise({redirectTo: '/'});
}]);


