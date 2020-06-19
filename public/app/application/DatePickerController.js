angular.module('sitApp').controller('datePickerController',  function ($scope, $timeout) {

    $scope.today = function () {
        $scope.dt = new Date();
    };
    $scope.today();


    $scope.clear = function () {
        $scope.dt = null;
    };


    $scope.toggleMin = function () {
        $scope.minDate = ($scope.minDate) ? null : new Date();
    };
    $scope.toggleMin();

    $scope.open = function ($event) {

        $timeout(function() {
            $scope.opened = true;
        });

    };

    $scope.dateOptions = {
        'year-format': "'yyyy'",
        'starting-day': 1
    };

    $scope.formats = ['dd.mm.yyyy', 'yyyy/mm/dd', 'shortDate'];
    $scope.format = $scope.formats[0];

});