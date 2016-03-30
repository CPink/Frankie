(function(){
    
    'use strict';
    
    angular
        .module('queStack', [
            'ui.router',
            'ui.gravatar',
            'ionic', 
            'ionic.contrib.ui.cards',
            'firebase'
        ])
        
        // setting firebase url to a static variable
        .constant('FirebaseUrl', 'https://igorapp.firebaseio.com/')
        
        //configuring view states
        .config(function($urlRouterProvider,$stateProvider){
            $stateProvider
                // .state('login', {
                //     url: '/',
                //     controller: 'loginController',
                //     controllerAs: 'loginCtrl',
                //     templateUrl: 'app/components/login/login.html'
                // })
                
                .state('mentor', {
                    url: '/',
                    controller: 'mentorQController',
                    controllerAs: 'mentorCtrl',
                    templateUrl: 'app/components/mentorQ/mentorQ.html'
                })
                
                // .state('student', {
                //     url: '/student',
                //     controller: 'studentController',
                //     controllerAs: 'studentCtrl',
                //     templateUrl: 'app/components/studentQ/studentQ.html'
                // })
                
                .state('queue', {
                    url: '/queue',
                    controller: 'queController',
                    controllerAs: 'qc',
                    templateUrl: '/app/components/que/que.html'
                })
                
                // .state('escalate', {
                //     url: '/escalate',
                //     controller: 'escalateController',
                //     controllerAs: 'escalateCtrl',
                //     templateUrl: '/app/components/escalate/escalate.html' 
                // })
               $urlRouterProvider.otherwise('/');     
        })
        
        
})();