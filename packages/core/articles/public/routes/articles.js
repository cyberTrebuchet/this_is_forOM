'use strict';

//Setting up route
angular.module('mean.articles').config(['$stateProvider',
  function($stateProvider) {

    // states for my app
    $stateProvider
      .state('all articles', {
        url: '/articles',
        templateUrl: '/articles/views/list.html',
        requiredCircles : {
          circles: ['authenticated', 'anonymous']
        }
      })
      .state('create article', {
        url: '/articles/create',
        templateUrl: '/articles/views/create.html',
        requiredCircles : {
          circles: ['authenticated'],
          denyState: 'auth.login'
        }
      })
      .state('article by id', {
        url: '/articles/:articleId',
        templateUrl: '/articles/views/view.html',
        requiredCircles : {
          circles: ['authenticated'],
          denyState: 'auth.login'
        }
      });
  }
]);
