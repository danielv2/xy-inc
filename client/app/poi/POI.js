'use strict';

angular.module('xyIncApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/POI/POI.html',
        controller: 'POICtrl'
      });
  });
