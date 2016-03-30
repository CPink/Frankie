(function () {

    'use strict';

    angular
        .module('queStack')
        .controller('loginController', loginController);


    function loginController($scope, $state, loginService) {
        var vm = this;
        vm.login = function (user) {
            loginService.login(user, function (authData) {
                if (authData) {
                    $state.go('queue');
                }
            })
        }

    }

})();