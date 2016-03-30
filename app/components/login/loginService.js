/* global Firebase */
(function(){
    
    'use strict';
    
    angular 
        .module('queStack')
        .service('loginService', loginService);
        
        function loginService(FirebaseUrl, $rootScope){
            
            // reference to firebase url
            var firebase = FirebaseUrl;
            
            //creating new firebase obj with my firebase refernce
            var fbLogin = new Firebase(firebase);

            var vm = this;
            
            vm.login = function(user, cb){
                fbLogin.authAnonymously(function(err,authData){
                    if(authData){
                        authData.user = user || {};
                        
                        authData.user.email = user.email;
                        
                        user.timestamp = Date.now();
                        
                        fbLogin.child('user').child(authData.user.email).set(authData);
                        fbLogin.child('questions').push(user);
                        cb(authData);
                    }else{
                        console.log('something went wrong');
                        cb(authData);
                    }
                });
            }
            
        }
})();