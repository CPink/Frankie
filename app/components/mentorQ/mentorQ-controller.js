(function () {

    'use strict';

    angular
        .module('queStack')
        .controller('mentorQController', mentorQController);


    function mentorQController($scope, $state, mentorQService) {
        var vm = this;
        vm.login = function (user) {
           return mentorQService.login(user, function (authData) {
                if (authData) {
                    $state.go('queue');
                }
            })
        }
        
        vm.register = function(user){
           return mentorQService.register(user, function(authData){
                if(authData){
                   //
                }
            });
        }

    }

}());