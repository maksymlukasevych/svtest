'use strict';

angular.module('myApp')

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/embroidery', {
    templateUrl: 'embroider/embroidery.html',
    controller: 'EmbroideryCtrl'
  });
}])



.controller('EmbroideryCtrl', ['$scope', '$http','$filter', 'dressesService', '$routeParams', function($scope, $http, $filter, dressesService, $routeParams) {

dressesService.getAllDresses($routeParams.embroidery).then(function(data){
    $scope.dresses = data;
});


}]);


