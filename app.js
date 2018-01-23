var pr = angular.module('project', ['ui.router']);
pr.config(function($stateProvider,$urlRouterProvider,$locationProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    
  .state('input',{
           url: '/input',
           templateUrl: 'input.html',
           controller: 'input_ctrl'
        
 })     
  .state('table', {
            url: '/table',
            templateUrl: 'table.html',
            controller: 'table_ctrl',
            
        })
  .state('root', {
            url: '/',
          
            
            
         })

  .state('update', {
            url: '/update',
            templateUrl: 'update.html',
            controller: 'update_ctrl',
            
        })
  
});




