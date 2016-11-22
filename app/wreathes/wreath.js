'use strict';

angular.module('myApp')

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/wreath', {
    templateUrl: 'wreathes/wreath.html',
    controller: 'WreathCtrl'
  });
}])


.controller('WreathCtrl', ['$scope', '$http','$filter', 'dressesService', '$routeParams', function($scope, $http, $filter, dressesService, $routeParams) {

dressesService.getAllDresses($routeParams.wreath).then(function(data){
    $scope.dresses = data;
});


}]);
