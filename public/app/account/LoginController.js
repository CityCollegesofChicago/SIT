angular.module('sitApp').controller('loginController', function($scope, $http, $filter, $window, Notifier, mvAuth,mvIdentity, $state) {


  $window.scrollTo(0, 0);

  var deadline = new Date($window.appDeadline);

  //console.log(Date.now().toString());

  if (deadline < Date.now()) {
    Notifier.error('CCC Scholarship Application is closed as of February 3, 2020 at 11:59 pm.');
    $state.go('deadlinepassed');
  }

  $scope.submitLogin = function () {

    mvAuth.authenticateUser($scope.user).then(function (success) {

      if (success && !mvIdentity.currentUser.hasApplied) {
        Notifier.notify('Welcome ' + mvIdentity.currentUser.GivenName + '.  You have successfully signed in!');
        $state.go('application');

      } else if (mvIdentity.currentUser.hasApplied) {
        Notifier.error(mvIdentity.currentUser.GivenName + '.  Our records indicate that you have already submitted an inquiry!');
      } else {
        Notifier.error('Username and Password combination incorrect');
      }

    });
  }
});