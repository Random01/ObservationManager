angular.module('observationManager.observation').factory('omScopeManager', [
    '$http', '$q', '_', function ($http, $q, _) {

        'use strict';

        var service = {},
            scopes = [];
        
        /**
        * 
        */
        service.getAllScopes = function(request) {
            return $q.when(scopes);
        };

        service.add = function (scope) {
            scopes.push(scope);
            return $q.when();
        };

        service.update = function(scope) {
            return $q.when();
        };

        service.delete = function (scope) {
            return $q.when();
        };

        service.getScopeById = function(request) {
            return $q.when();
        };

        return service;
    }
]);