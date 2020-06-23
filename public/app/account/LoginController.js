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

      if (success && mvIdentity.currentUser.GivenName) {
        //$scope.checkIfAdmin();
        Notifier.notify('Welcome ' + mvIdentity.currentUser.GivenName + '.  You have successfully signed in!');
        $state.go('application');
      }
      else {
        Notifier.error('Username and Password combination incorrect');
      }

    });

    //$scope.checkIfAdmin = function () {
      //if(
          //($scope.user.username.indexOf('ddorman')> -1) ||
          //($scope.user.username.indexOf('aberns')> -1) ||
          //($scope.user.username.indexOf('smarsey')> -1) ||
          //($scope.user.username.indexOf('dmacklin')> -1) ||
          //($scope.user.username.indexOf('lewashington')> -1) ||
          //($scope.user.username.indexOf('jcampbell')> -1) ||
          //($scope.user.username.indexOf('yweng3')> -1))
      //{
        //Notifier.notify('Welcome ' + mvIdentity.currentUser.GivenName + '.  You have successfully signed in!');
        //$state.go('pocReportList');
      //}
      //else {
        //return;
      //}
    //}
  }
});