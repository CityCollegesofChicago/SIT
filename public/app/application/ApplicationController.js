angular.module('sitApp').controller('applicationController',  function ($scope, $filter, $window, $state, $timeout, mvIdentity, Upload, Application, Notifier, usSpinnerService ) {

    $window.scrollTo(0, 0);

    //$scope.files = {};
    $scope.response = {};
    $scope.Submitted = false;

    //$scope.setFileName = function(field, value){
        //$scope.student[field] = value;
    //};

    if (!mvIdentity.currentUser) {
        $state.go('login');
    } else {
        $scope.student = mvIdentity.currentUser;
    }


    $scope.submitApplication = function () {
        if (!$scope.scholarshipAppForm.$valid || $scope.Submitted ) {
            Notifier.error("Please complete all the required fields.");
            return;
        }
        $scope.saveForm();

    };

    $scope.saveForm = function () {
        $scope.Submitted = true;
        Application.save({student: $scope.student}).$promise.then(function (result) {
                Notifier.notify('Your Person of Concern application has been successfully submitted.');
                $timeout(function () {

                    $state.go('thanks');
                },1000);

            },
            function (err) {
                Notifier.error(err);
            });

    }

    $scope.submitApplication = function () {
        if (!$scope.scholarshipAppForm.$valid || $scope.Submitted) {
            Notifier.error("Please complete all the required fields.");
            return;
        }
        $scope.saveForm();
        //$scope.submitFormDocs();
    };
})
    //$scope.submitFormDocs = function () {
        //var file = {};

        //file.upload = Upload.upload({
            //url: '/sit/api/application',
            //data: {student : $scope.student,
                //files: $scope.files}
        //});
        //$scope.Submitted = true;
        //usSpinnerService.spin('spinner-1');
        //file.upload.then(function (response) {
            //$timeout(function () {
                //$scope.student = response.data;
                //usSpinnerService.stop('spinner-1');
            //});
        //}, function (response) {
            //if (response.status > 0){
                //console.dir(  response.data);
            //}
            //$scope.Submitted = false;
            //usSpinnerService.stop('spinner-1');
            //Notifier.error(response.data.reason || 'There was a problem and your application has not been submitted.');
            //$scope.response = response;
        //});

        //Application.save({student: $scope.student}).$promise.then(function (result) {
                //Notifier.notify('Your inquiry has been successfully submitted.');
                //$timeout(function () {

                    //$state.go('thanks');
                //},1000);

            //},
            //function (err) {
                //Notifier.error(err);
            //});

    //}

    //if (!mvIdentity.currentUser) {
    //$state.go('login');
    //} else {
    //$scope.student = mvIdentity.currentUser;
    //if($scope.student.hasApplied === true){
    //Notifier.notify("You have already submitted an inquiry.  Please contact support if you believe this is in error.")
    //$timeout(function () {
    //$state.go('thanks');
    //},1000);

    //}
    //$scope.student.birthdate = $filter('date')($scope.student.birthdate.slice(0,4) + "-" + $scope.student.birthdate.slice(4,6) + "-" + $scope.student.birthdate.slice(6), "MM/dd/yyyy");

    //}







