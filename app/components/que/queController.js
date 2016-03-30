(function() {

    'use strict';

    angular
        .module('queStack')
        .controller('queController', queController);

    function queController($scope, $firebaseArray, FirebaseUrl, $ionicSwipeCardDelegate, queService) {
        var vm = this;
        $scope.classes = queService.mattsWay();
      
        vm.cardSwiped = function(card) {
            vm.cards.$remove(card);
        }

    }

} ());