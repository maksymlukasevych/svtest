'use strict';


angular.module('myApp')

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/dresspage/:id', {
    templateUrl: 'dresspage/dresspage.html',
    controller: 'SliderController'
  });
}])

.controller('SliderController', ['$scope', '$http', 'dressesService', '$routeParams', function($scope, $http, dressesService, $routeParams) {


  $scope.changeImage = function (a) {
        document.getElementById("img").src= a;
    };

dressesService.getDress($routeParams.id).then(function(data){
    $scope.dress = data;
    $scope.imageUrl1 = data.imageUrl1;
    $scope.imageUrl2 = data.imageUrl2;
    $scope.imageUrl3 = data.imageUrl3;
})

}]);



