'use strict';
var sitApp = angular.module('sitApp', ['ngResource', 'ui.router', 'ngFileUpload','as.sortable', 'ui.mask', 'ui.bootstrap', 'ngAnimate', 'angularSpinner' ])
    .config(function ($stateProvider,  $urlRouterProvider, $locationProvider) {

        $stateProvider.state('admin',
            {
                url: '/sit/admin',
                templateUrl: "/sit/partials/account/login",
                controller: "loginController"
            });

        $stateProvider.state('pocReportList',
            {
                url: '/sit/admin/pocReportList',
                templateUrl: "/sit/partials/admin/pocReportList",
                controller: "AdminCListController",
            });

        $stateProvider.state('login',
            {
                url: '/sit/login',
                templateUrl: '/sit/partials/account/login',
                controller: 'loginController'
            });

        $stateProvider.state('application',
            {
                url: '/sit/application',
                templateUrl: '/sit/partials/application/applicationForm',
                controller: 'applicationController'
            });

        $stateProvider.state('thanks',
            {
                url: '/sit/thanks',
                templateUrl: "/sit/partials/application/thanks"
            });

        $stateProvider.state('deadlinepassed',
            {
                url: '/sit/deadlinepassed',
                templateUrl: "/sit/partials/application/deadlinepassed"
            });

        $urlRouterProvider.when('/sit/admin', function ($state) {
            $state.go('pocReportList');
        });

        $urlRouterProvider.when('/sit/admin/', function ($state) {
            $state.go('pocReportList');
        });

        $urlRouterProvider.when('/SIT/admin', function ($state) {
            $state.go('pocReportList');
        });

        $urlRouterProvider.when('/SIT/Admin/', function ($state) {
            $state.go('pocReportList');
        });

        $urlRouterProvider.when('/sit', function ($state) {

            $state.go('login');
        });
        $urlRouterProvider.when('/SIT', function ($state) {

            $state.go('login');
        });
        $urlRouterProvider.when('/sit/', function ($state) {

            $state.go('login');
        });
        $urlRouterProvider.when('/SIT/', function ($state) {

            $state.go('login');
        });

        $urlRouterProvider.otherwise(function(){ 'login'});


        $locationProvider.html5Mode(true);
        
    });

angular.module('sitApp').run(function ($rootScope, $state) {
    $rootScope.$on('$stateChangeError', function (evt, current, previous, rejection) {
        console.log('state change error + rejection: ' + rejection);
        $state.go('login');
    });
    $rootScope.$on('$routeChangeError', function(evt, current, previous, rejection) {
        if (rejection === 'not authorized') {
            $state.go('login');
        }
    });
});

