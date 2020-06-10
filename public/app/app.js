'use strict';
var sitApp = angular.module('sitApp', ['ngResource', 'ui.router', 'ngFileUpload','as.sortable', 'ui.mask', 'ui.bootstrap', 'ngAnimate', 'angularSpinner' ])
    .config(function ($stateProvider,  $urlRouterProvider, $locationProvider) {
        // var routeRoleChecks = {
        //     admin: {auth: function(mvAuth) {
        //         return mvAuth.authorizeCurrentUserForRoute('admin')
        //     }}
        // };
        // $stateProvider.state('admin',
        //     {
        //         url: '/scholarshipApp/admin',
        //         templateUrl: "/scholarshipApp/partials/account/login",
        //         controller: "loginController"
        //     });
        // $stateProvider.state('adminList',
        //     {
        //         url: '/scholarshipApp/admin/applicantList',
        //         templateUrl: "/scholarshipApp/partials/admin/applicantList",
        //         controller: "applicantListController",
        //         resolve: routeRoleChecks.admin
        //     });

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

        $stateProvider.state('application',
            {
                url: '/sit/application',
                abstract: true,
                templateUrl: '/sit/partials/application/applicationForm',
                controller: 'applicationController'
            });

        $stateProvider.state('application.form',
            {
                url: '/form',
                templateUrl: '/sit/partials/application/general_formfield_info'
            });

        $stateProvider.state('login',
            {
                url: '/sit/login',
                templateUrl: '/sit/partials/account/login',
                controller: 'loginController'
            });

        // $stateProvider.state('applicationClosed',
        //     {
        //         url: '/scholarshipApp',
        //         templateUrl: '/scholarshipApp/partials/application/applicationClosed'
        //     });

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

