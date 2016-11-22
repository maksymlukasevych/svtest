'use strict';

angular.module('myApp')

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cortege', {
    templateUrl: 'corteges/cortege.html',
    controller: 'CortegeCtrl'
  });
}])

.controller('CortegeCtrl', ['$scope','$http','imageService','angularGridInstance', function($scope,$http,imageService,angularGridInstance) {



}]);