var omApp = angular.module('observationManager.app', [
    'ngRoute', 'ngResource', 'observationManager.common', 'observationManager.observation', 'observationManager.localization']);

omApp.config([
    '$routeProvider',
    function ($routeProvider) {
        'use strict';

        $routeProvider
            .when('/observations', {
                templateUrl: 'scripts/observation/observation/observations.html',
                controller: 'omObservationsController'
            })
            .when('/scopes/create', {
                templateUrl: 'scripts/observation/scope/scope.html',
                controller: 'omScopeController'
            })
            .when('/scopes/:scopeId', {
                templateUrl: 'scripts/observation/scope/scope.html',
                controller: 'omScopeController'
            })
            .when('/scopes', {
                templateUrl: 'scripts/observation/scope/scopes.html',
                controller: 'omScopesController'
            })
            .otherwise({
                redirectTo: '/'
        });
    }
]);