angular.module('observationManager.observation').controller('omScopeController', [
    '$scope', function($scope) {
        $scope.scope = {
            model: 'C8-N',
            aperture: 200,
            focalLength: 1000
        }
    }
]);