'use strict';

angular.module('myApp')

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/dresspage/:id', {
    templateUrl: 'dresspage/dresspage.html',
    controller: 'DresspageCtrl'
  });
}])

.controller('DresspageCtrl', ['$scope', '$http', 'dressesService', '$routeParams', function($scope, $http, dressesService, $routeParams) {


dressesService.getDress($routeParams.id).then(function(data){
    $scope.dress = data;
})

}]);


