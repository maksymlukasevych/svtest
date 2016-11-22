'use strict';

angular.module('myApp')

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/evening', {
    templateUrl: 'evenings/evening.html',
    controller: 'EveningCtrl'
  });
}])



.controller('EveningCtrl', ['$scope', '$http','$filter', 'dressesService', '$routeParams', function($scope, $http, $filter, dressesService, $routeParams) {

dressesService.getAllDresses($routeParams.evening).then(function(data){
    $scope.dresses = data;
});


}]);


