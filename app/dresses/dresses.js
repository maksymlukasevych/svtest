'use strict';

angular.module('myApp')

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/', {
    templateUrl: 'dresses/dresses.html',
    controller: 'DressesCtrl'
    }).
  when('/dresses/:dressId', {
     templateUrl: 'dresspage/dresspage.html', 
     controller: 'DresspageCtrl'
  });


}])


.controller('DressesCtrl', ['$scope', '$http', 'dressesService', '$routeParams', function($scope, $http, dressesService, $routeParams) {

dressesService.getAllDresses().then(function(data){
    $scope.dresses = data;
});



}]);




