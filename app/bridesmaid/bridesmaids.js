'use strict';

angular.module('myApp')

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/bridesmaids', {
    templateUrl: 'bridesmaid/bridesmaids.html',
    controller: 'BridesmaidsCtrl'
  });
}])



.controller('BridesmaidsCtrl', ['$scope', '$http','$filter', 'dressesService', '$routeParams', function($scope, $http, $filter, dressesService, $routeParams) {

dressesService.getAllDresses($routeParams.bridesmaids).then(function(data){
    $scope.dresses = data;
});


}]);


