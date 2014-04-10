'use strict';

angular.module('napathonApp')
  .directive('header', function () {
    return {
      templateUrl: 'views/header.html',
      restrict: 'E',
    };
  }
);
