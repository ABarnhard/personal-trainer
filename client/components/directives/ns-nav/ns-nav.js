(function(){
  'use strict';

  angular.module('ns.nav', [])
  .directive('nsNav', [function(){
    var o = {};

    o.restrict    = 'A';
    o.templateUrl = '/components/directives/ns-nav/ns-nav.html';
    o.require     = '^abTitle';
    o.scope       = {
      abTitle: '@'
    };
    o.controller  = ['$scope', function($scope){
                      $scope.$on('user', function(e, user){
                        $scope.user = user;
                      });
                    }];
    return o;
  }]);
})();
