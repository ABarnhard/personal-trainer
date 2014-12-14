(function(){
  'use strict';

  angular.module('personal-trainer', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home',     {url:'/',         templateUrl:'/views/home/home.html'})
    .state('register', {url:'/register', templateUrl:'/views/users/users.html', controller:'UsersCtrl'})
    .state('login',    {url:'/login',    templateUrl:'/views/users/users.html', controller:'UsersCtrl'})
    .state('logout',   {url:'/logout',   template:'',                           controller:'UsersCtrl'});

  }])
  .run(['User', function(User){}]);
})();

