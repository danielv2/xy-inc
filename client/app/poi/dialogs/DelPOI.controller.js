'use strict';

angular.module('xyIncApp')
  .controller('DelPOICtrl', function ($scope, $mdDialog, $http, poi) {
  'use strict';
    
    this.cancel = $mdDialog.cancel;
    
    $scope.poi = poi;
    
    $scope.deletar = function () {
        var poiID = $scope.poi._id;
        $http.delete('/api/pois/' + $scope.poi._id)
        .then( function() {
          console.log("POI: " + $scope.poi.nome + " deletado!");
          onComplete();
        })
        .catch(function(err) {
          $scope.error = err.data;
          $scope.errors = {};
        }); 
    }
    
    function onComplete() {
        $mdDialog.hide();
    }
  
});