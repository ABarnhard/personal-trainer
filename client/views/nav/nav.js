(function(){
    'use strict';

  angular.module('personal-trainer')
  .controller('NavCtrl', ['$scope', function($scope){
    $scope.$on('user', function(e, user){
        $scope.user = user;
    });
  }]);
})();
