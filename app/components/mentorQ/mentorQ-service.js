(function() {

    'use strict';

    angular
        .module('queStack')
        .service('mentorQService', mentorQService)

    function mentorQService(FirebaseUrl,$rootScope,$firebaseAuth, $firebaseArray) {
        var mentorLog = FirebaseUrl;

        var mentorLogin = new Firebase(mentorLog);

        var vm = this;
        
        var userCollection = $firebaseArray(new Firebase(mentorLog + 'users'));
          
        // vm.logout = logout;
        // vm.login = login;
        // vm.register = register;
        // $rootScope.authData = $firebaseAuth(mentorLogin);

        // function logout() {
        //     $rootScope.authData.$unauth();
        //     console.log('LOGGED OUT');
        //     $state.go('mentor');
        // }

        vm.login = function (user, cb) {
		mentorLogin.authWithPassword({
            
            user: user || {},
			email: user.email,    //Email and Password come from our login form
			password: user.password
		}, function (err, authData) {

			if (err) {
				switch (err.code) {
					case "INVALID_EMAIL":
					// handle an invalid email
					case "INVALID_PASSWORD":
					// handle an invalid password
					default:
				}
			} else if (authData) {
				// user authenticated with Firebase
				console.log("Logged In! User ID: " + authData.uid);
				cb(authData); //gives the authenticated user to our callback
			}
		});
	}

         vm.register = function (user, cb) {
		mentorLogin.createUser({
			email: user.email,
			password: user.password
		}, function (error) {

			if (!error) {
				console.log("User created successfully");
				mentorLogin.authWithPassword({
					email: user.email,
					password: user.password
				}, function (err, authData) {
					if (authData) {
                        authData.email = user.email;
						//mentorLogin.child('users').child(authData.uid).set(authData);
						cb(authData);
                        //work area for touching user collection
                        var newMentor = {
                            id: authData.uid,
                            email: user.email,
                            accountCreated: Date.now()
                        }
                          userCollection.$add(newMentor);
					} else {
						console.log('something went wrong');
					}
				});
			} else {
				console.log("Error creating user:", error);
				return false;
			}
		});
        }

    }

}());