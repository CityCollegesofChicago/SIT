angular.module('sitApp').factory('Application', function($resource, $q, $http) {

  var applicationResource = $resource('/sit/api/application',{}, {

      save :{
          method: 'POST',
          url: '/sit/api/application/save'
      },

      uploadFile :{
          method: 'POST',
          url: '/sit/api/application/uploadFile'
      }
  });


  return applicationResource;
});