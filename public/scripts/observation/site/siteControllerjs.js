angular.module('observationManager.observation').controller('omSiteController', [
    '$scope', 'omSite', function($scope, omSite) {
        $scope.site = new omSite({
            id: 'some guid',
            name: 'Saratov',
            longitude: {
                unit: 'deg',
                value: 51.53
            },
            latitude: {
                unit: 'deg',
                value: 46.02
            },
            timezone: 2
        });
    }
]);