'use strict';

angular.module('xyIncApp')
  .controller('ProximidadePOICtrl', function ($scope, $mdDialog, $http, $q) {
    'use strict';

    $scope.filtro = {};

    this.cancel = $mdDialog.cancel;

    this.buscar = function () {
      $scope.item.form.$setSubmitted();
      if ($scope.item.form.$valid) {
        console.log($scope.filtro);

        var deferred = $q.defer();
        $scope.promise = deferred.promise;

        $http.post('/api/pois/proximidade', $scope.filtro)
          .then(function (result){
            $scope.pois = result.data;
            deferred.resolve();
          })
          .catch(function (err) {
            err = err.data;
            $scope.errors = {};
            deferred.resolve();
          });
      }
    };
  });