'use strict';

angular.module('myApp')

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/ties', {
    templateUrl: 'tie/ties.html',
    controller: 'TiesCtrl'
  });
}])


.controller('TiesCtrl', ['$scope', '$http','$filter', 'dressesService', '$routeParams', function($scope, $http, $filter, dressesService, $routeParams) {

dressesService.getAllDresses($routeParams.ties).then(function(data){
    $scope.dresses = data;
});


}]);
