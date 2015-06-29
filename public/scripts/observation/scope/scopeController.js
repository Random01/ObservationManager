angular.module('observationManager.observation').controller('omScopeController', [
    '$scope', 'omScope', 'omScopeManager', '$location',
    function ($scope, omScope, omScopeManager, $location) {
        $scope.scope = new omScope();

        $scope.create = function () {
            if ($scope.scope.isValid()) {
                omScopeManager.add($scope.scope).then(function () {
                    $location.path('scopes');
                });
            }
        };

        $scope.cancel = function() {
            $location.path('scopes');
        };

    }
]);