'use strict';

angular.module('xyIncApp')
  .controller('POICtrl', function ($scope, $mdDialog, $http, $filter, $q, $timeout, $window) {
    
    $scope.pagination = {
        page : 'Página',
        rowsPerPage : 'itens por página',
        of: 'de'      
    };    
    
    function getRegistros() {
      var deferred = $q.defer();
      $scope.promise = deferred.promise;

        $http.get('/api/POIs').then(function (result) {
            $scope.POIs = result.data;                 
            deferred.resolve();
        })
        .catch( function(err) {
            err = err.data;
            $scope.errors = {};
            deferred.resolve();
        });
    }
    getRegistros();

    $scope.addItem = function (event) {
        $mdDialog.show({
            clickOutsideToClose: true,
            controller: 'AddPOICtrl',
            controllerAs: 'ctrl',
            focusOnOpen: false,
            targetEvent: event,            
            templateUrl: 'app/POI/dialogs/AddPOI.html',
        }).then(getRegistros);
    };

    $scope.edit = function (poi) {
        $mdDialog.show({
            clickOutsideToClose: true,
            controller: 'EditPOICtrl',
            controllerAs: 'ctrl',
            focusOnOpen: false,
            targetEvent: event,
            locals: { poi: poi },
            templateUrl: 'app/POI/dialogs/EditPOI.html',
        }).then(getRegistros);
    };
  
    $scope.delete = function (poi) {
        $mdDialog.show({
            clickOutsideToClose: true,
            controller: 'DelPOICtrl',
            controllerAs: 'ctrl',
            focusOnOpen: false,
            targetEvent: event,
            locals: { poi: poi },
            templateUrl: 'app/POI/dialogs/DelPOI.html',
        }).then(getRegistros);
    }; 

    $scope.proximidade = function (event) {
        $mdDialog.show({
            clickOutsideToClose: true,
            controller: 'ProximidadePOICtrl',
            controllerAs: 'ctrl',
            focusOnOpen: false,
            targetEvent: event,
            templateUrl: 'app/POI/dialogs/ProximidadePOI.html',
        }).then(getRegistros);
    }; 
  });
