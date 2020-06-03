angular.module('sitApp').factory('mvAuth', function($http, mvIdentity, $q) {
  return {
    authenticateUser: function(user) {
      var dfd = $q.defer();
      $http.post('/sit/login',{ user: user}).then(function(response) {
        if(response.data.success) {
          mvIdentity.currentUser =  response.data.result;
          dfd.resolve(true);
        } else {
          dfd.resolve(false);
        }
      });
      return dfd.promise;
    }
  }
});