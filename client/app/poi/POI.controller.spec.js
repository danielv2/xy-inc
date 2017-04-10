'use strict';

describe('Controller: POICtrl', function () {

  // load the controller's module
  beforeEach(module('xyIncApp'));

  var POICtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    POICtrl = $controller('POICtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
