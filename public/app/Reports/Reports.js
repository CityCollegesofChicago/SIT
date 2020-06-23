angular.module('sitApp').factory('Reports', function($resource, $q, $http) {

    var reportsResource = $resource('/sit/api/reports',{}, {

        getAll: {
            method: 'GET',
            url: '/sit/api/reports',
            isArray: false,
        },
        update :{
            method: 'POST',
            url: '/sit/api/reports/updateContract'
        },
        //getReports : {
        //method:  'GET',
        //url: '/sit/api/reports/:id',
        //parameters :{
        //id : '@id'
        //},
        //isArray : false
        //}
    });


    return reportsResource;
});