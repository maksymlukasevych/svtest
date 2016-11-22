'use strict';

angular.module('myApp')

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/wreathpage/:wreath', {
    templateUrl: 'wreathpage/wreathpage.html',
    controller: 'WreathpageCtrl'
  });
}])

.controller('WreathpageCtrl', ['$scope', '$http', 'dressesService', '$routeParams', function($scope, $http, dressesService, $routeParams) {


dressesService.getDress($routeParams.wreath).then(function(data){
    $scope.dress = data;
})
}]);

