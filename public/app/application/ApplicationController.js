angular.module('sitApp').controller('applicationController',  function ($scope, $filter, $window, $state, $timeout, mvIdentity, Upload, Application, Notifier, usSpinnerService ) {

    $window.scrollTo(0, 0);

    //$scope.files = {};
    $scope.response = {};
    //$scope.student.distributionnames = {};
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
        if (!$scope.scholarshipAppForm.$valid) {
            Notifier.error("Please complete all the required fields.");
            return;
        }
        $scope.saveForm();

    };

    $scope.saveForm = function () {
        //if($scope.student.college == 'Harold Washington' ){
            //$scope.student.distributionnames = 'dlopez1@ccc.edu, dduarte15@ccc.edu, awilson243@ccc.edu, mowens63@ccc.edu, btruvillion@ccc.edu, nradford@ccc.edu, mturner@ccc.edu, azettel@ccc.edu, ecrabtreenelson@ccc.edu, dwilliams173@ccc.edu, tlindsay6@ccc.edu, dbarnett6@ccc.edu';
            //$scope.student.distributionnames = 'dennis.macklin@sbcglobal.net';
        //}
        //else if( $scope.student.college == 'Harry S Truman' ){
            //$scope.student.distributionnames = 'kconnor@ccc.edu, kcaldwell-littleton@ccc.edu, ldaley@ccc.edu, adurbak@ccc.edu, sheraty@ccc.edu, Lcheatham2@ccc.edu, cbishop13@ccc.edu, mroberts39@ccc.edu, msoley@ccc.edu, amata@ccc.edu, akerr2@ccc.edu, dbarnett6@ccc.edu';
            //$scope.student.distributionnames = 'dennis.macklin@sbcglobal.net';
        //}
        //else if($scope.student.college == 'Kennedy-King'){
            //$scope.student.distributionnames = 'gathomas@ccc.edu, dgavin9@ccc.edu, kdouglass1@ccc.edu, cmcgill@ccc.edu, mcrawford34@ccc.edu, hnorise@ccc.edu, ephillips13@ccc.edu, zlandrum@ccc.edu, tcox11@ccc.edu, hhorace@ccc.edu, ljamison12@ccc.edu, bmccants2@ccc.edu, gvillagomez13@ccc.edu, dbarnett6@ccc.edu';
            //$scope.student.distributionnames = 'dennis.macklin@sbcglobal.net';
        //}
        //else if( $scope.student.college == 'Malcolm X' ){
            //$scope.student.distributionnames = 'dsanders67@ccc.edu, rthompson82@ccc.edu, lwillis01@ccc.edu, gbarksdale@ccc.edu, eschweitzer@ccc.edu, dbarnett6@ccc.edu, jturekjohnson@ccc.edu, sbaker71@ccc.edu, mdiaz103@ccc.edu, glimon7@ccc.edu, nbrown163@ccc.edu, jsteele34@ccc.edu, tscott-brand@ccc.edu, egmitter@ccc.edu';
            //$scope.student.distributionnames = 'dennis.macklin@sbcglobal.net';
        //}
        //else if($scope.student.college == 'Olive-Harvey'){
            //$scope.student.distributionnames = 'khollingsworth@ccc.edu, bnichols1@ccc.edu, rjohnson244@ccc.edu, madams@ccc.edu, ldavis315@ccc.edu, llarry4@ccc.edu, dgiven@ccc.edu, twurst@ccc.edu, tarmstrong11@ccc.edu, phenderson10@ccc.edu, trobinson258@ccc.edu, dbarnett6@ccc.edu';
            //$scope.student.distributionnames = 'dennis.macklin@sbcglobal.net';
        //}
        //else if( $scope.student.college == 'Richard J. Daley' ){
            //$scope.student.distributionnames = 'jjanosky@ccc.edu, apanomitros@ccc.edu, aalthoff@ccc.edu, rmartin1@ccc.edu, jhollie1@ccc.edu, dgiacometti@ccc.edu, rtorres30@ccc.edu, dbarnett6@ccc.edu';
            //$scope.student.distributionnames = 'dennis.macklin@sbcglobal.net';
        //}
        //else if($scope.student.college == 'Wilbur Wright'){
            //$scope.student.distributionnames = 'dpotash@ccc.edu, vguerrieri@ccc.edu, abrown601@ccc.edu, pwood3@ccc.edu, jestill@ccc.edu, pmonaco@ccc.edu, kchapman17@ccc.edu, rmurden@ccc.edu, slevandoski@ccc.edu, sfreeman38@ccc.edu, tmurdock4@ccc.edu, aguengerich1@ccc.edu, rbatrich@ccc.edu, bsoske@ccc.edu, dbarnett6@ccc.edu';
            //$scope.student.distributionnames = 'dennis.macklin@sbcglobal.net';
        //}
        //else if($scope.student.college == 'District Office'){
            //$scope.student.distributionnames = 'dbarnett6@ccc.edu, skrah@ccc.edu, vdoss3@ccc.edu, rpassarelli@ccc.edu, alittleton1@ccc.edu';
            //$scope.student.distributionnames = 'dennis.macklin@sbcglobal.net';
        //}
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

})

    //$scope.submitApplication = function () {
        //if (!$scope.scholarshipAppForm.$valid || $scope.Submitted) {
            //Notifier.error("Please complete all the required fields.");
            //return;
        //}
        //$scope.saveForm();
        //$scope.submitFormDocs();
    //};

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







