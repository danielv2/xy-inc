'use strict';

angular.module('xyIncApp')
  .controller('EditPOICtrl', function ($scope, $mdDialog, $http, poi) {
    'use strict';

    this.cancel = $mdDialog.cancel;
    console.log(poi);
    $scope.poiTela = angular.copy(poi);
    
    function success(poi) {
      $mdDialog.hide(poi);
    }

    this.editItem = function () {
      $scope.item.form.$setSubmitted();
      if ($scope.item.form.$valid) {
        $http.put('/api/pois/' + $scope.poiTela._id, $scope.poiTela)
          .then(function () {
            console.log("POI: " + $scope.poiTela.nome + " alterado!");
            success($scope.poi);
          })
          .catch(function (err) {
            err = err.data;
            $scope.errors = {};
          });
      }
    };

  });
