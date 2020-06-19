angular.module('sitApp').factory('Applicant', function($resource) {
    var ApplicantResource = $resource('sit/api/applicant');

    return ApplicantResource;
});