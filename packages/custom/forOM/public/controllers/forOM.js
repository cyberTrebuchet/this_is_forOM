'use strict';

/* jshint -W098 */
angular.module('mean.forOM').controller('ForOMController', ['$scope', 'Global', 'ForOM',
  function($scope, Global, ForOM) {
    $scope.global = Global;
    $scope.package = {
      name: 'forOM'
    };
  }
]);
