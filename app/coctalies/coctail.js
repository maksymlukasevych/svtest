'use strict';

angular.module('myApp')

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/coctail', {
    templateUrl: 'coctalies/coctail.html',
    controller: 'CoctailCtrl'
  });
}])



.controller('CoctailCtrl', ['$scope', '$http','$filter', 'dressesService', '$routeParams', function($scope, $http, $filter, dressesService, $routeParams) {

dressesService.getAllDresses($routeParams.coctail).then(function(data){
    $scope.dresses = data;
});


}]);


