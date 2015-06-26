angular.module('observationManager.observation').controller('omObservationsController', [
    '$scope', 'omObservationManager', function ($scope, omObservationManager) {
        $scope.observations = omObservationManager.getAllObservations({
            userId: 'User guid'
        });
    }
]);