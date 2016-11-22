'use strict';

angular.module('myApp')

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/rules', {
    templateUrl: 'rule/rules.html',
    controller: 'RulesCtrl'
  });
}])

.controller('RulesCtrl', ['$scope', '$http', 'dressesService', '$routeParams', function($scope, $http, dressesService, $routeParams) {


}]);

