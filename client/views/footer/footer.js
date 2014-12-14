(function(){
    'use strict';

  angular.module('personal-trainer')
  .controller('FooterCtrl', ['$scope', function($scope){
    $scope.year = new Date().getFullYear();
  }]);
})();
