(function(){
    'use strict';

    angular
        .module('myApp')
        .factory('dressesService', dressesService);

    dressesService.$inject = ['$http', '$q'];

    /* @ngInject */
    function dressesService($http, $q) {
    	var service = {
    		getAllDresses: getAllDresses,
    		getDress: getDress,
    		
    	}

    	return service;

		function getAllDresses() {
    		var defered = $q.defer();

    		$http.get('dresses/alldress.json').then(successCallback);

    		return defered.promise;

    		function successCallback(data) {
				defered.resolve(data.data);
			};
    	}

    	function getDress(id) {
    		var defered = $q.defer();

    		$http.get('dresses/alldress.json').then(successCallback);

    		return defered.promise;

			function successCallback(data) {
				for (var i = 0; i < data.data.length; i++) {
					if (parseInt(data.data[i].id) === parseInt(id)) {
						defered.resolve(data.data[i]);
					}
				}
			}
    	}
    }
})()