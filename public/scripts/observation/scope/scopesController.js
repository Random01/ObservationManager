angular.module('observationManager.observation').controller('omScopesController', [
    '$scope', 'omScopeManager',
    function ($scope, omScopeManager) {
        'use strict';

        $scope.isLoading = true;
        omScopeManager.getAllScopes().then(function (scopes) {
            $scope.isLoading = true;
            $scope.scopes = scopes;
        });

    }
]);