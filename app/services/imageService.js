    'use strict';
    angular.module('myApp').service('imageService',['$q','$http',function($q,$http){
        this.loadImages = function(){
            return $http.jsonp("http://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=JSON_CALLBACK&tags=svyatonaprokat");
        };
    }])