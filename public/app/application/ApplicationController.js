angular.module('sitApp').controller('applicationController',  function ($scope, $filter, $window, $state, $timeout, mvIdentity, Application, Notifier ) {

    $window.scrollTo(0, 0);

    $scope.response = {};
    $scope.Submitted = false;

    if (!mvIdentity.currentUser) {
        $state.go('login');
    } else {
        $scope.student = mvIdentity.currentUser;
        if($scope.student === true){
            Notifier.notify("You have already submitted an inquiry.  Please contact support if you believe this is in error.")
            $timeout(function () {
                $state.go('thanks');
            },1000);

        }
        //$scope.student.birthdate = $filter('date')($scope.student.birthdate.slice(0,4) + "-" + $scope.student.birthdate.slice(4,6) + "-" + $scope.student.birthdate.slice(6), "MM/dd/yyyy");

    }

    $scope.submitApplication = function () {
        if (!$scope.scholarshipAppForm.$valid ) {
            Notifier.error("Please complete all the required fields and check the consent box.");
            return;
        }
        $scope.saveForm();

    };

    $scope.saveForm = function () {
        $scope.Submitted = true;
        Application.save({student: $scope.student}).$promise.then(function (result) {
                Notifier.notify('Your inquiry has been successfully submitted.');
                $timeout(function () {

                    $state.go('thanks');
                },1000);

            },
            function (err) {
                Notifier.error(err);
            });

    }


})





