angular.module('observationManager.observation').controller('omScopesController', [
    '$scope', 'omScopeManager',
    function ($scope, omScopeManager) {
        'use strict';

        omScopeManager.getAllScopes().then(function(scopes) {
            $scope.scopes = scopes;
        });

    }
]);