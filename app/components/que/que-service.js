(function() {

    'use strict';

    angular
        .module('queStack')
        .service('queService', queService)

    function queService($timeout, $firebaseArray, $firebaseAuth, FirebaseUrl) {
        var vm = this;

        var ref = $firebaseArray(new Firebase(FirebaseUrl + 'classrooms'));

        var authData = $firebaseAuth(new Firebase(FirebaseUrl));
        authData = authData.$getAuth();

        vm.classrooms = [];
        vm.classSearch = function() {
            return ref.$loaded().then(function(x) {

                ref.forEach(function(elm) {
                    if (!elm.mentors) {
                        elm.mentors = [];
                    }
                    for (var mentor in elm.mentors) {
                        if (mentor === authData.uid) {

                            vm.classrooms.push(elm.$id);

                        }
                    }

                })
                return vm.classrooms;

            })
        }

        vm.getQuestions = function(classId) {
            return $firebaseArray(new Firebase(FirebaseUrl + 'classrooms/' + classId + '/questions/'));
        }

        vm.mattsWay = function(){
            return ref;
        }
    }

} ());