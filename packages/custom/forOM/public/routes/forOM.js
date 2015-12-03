'use strict';

angular.module('mean.forOM').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('forOM example page', {
      url: '/forOM/example',
      templateUrl: 'forOM/views/index.html'
    });
  }
]);
