'use strict';

angular.module('xyIncApp')
  .controller('AddPOICtrl', function ($scope, $mdDialog, $http) {
    'use strict';

    $scope.poi = {};

    this.cancel = $mdDialog.cancel;

    function success(poi) {
      $mdDialog.hide(poi);
    }

    this.addItem = function () {
      $scope.item.form.$setSubmitted();
      console.log($scope.poi);
      if ($scope.item.form.$valid) {
        $http.post('/api/pois', $scope.poi)
          .then(function () {
            console.log("POI: " + $scope.poi.nome + " adicionado!");
            success($scope.poi);
          })
          .catch(function (err) {
            $scope.err = err.data;
          });
      }
    };

  });
