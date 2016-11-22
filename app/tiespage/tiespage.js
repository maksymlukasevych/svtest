'use strict';

angular.module('myApp')

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/tiespage/:ties', {
    templateUrl: 'tiespage/tiespage.html',
    controller: 'TiespageCtrl'
  });
}])

.controller('TiespageCtrl', ['$scope', '$http', 'dressesService', '$routeParams', function($scope, $http, dressesService, $routeParams) {


dressesService.getDress($routeParams.ties).then(function(data){
    $scope.dress = data;
})
}]);

