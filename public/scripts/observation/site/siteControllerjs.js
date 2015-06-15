angulare.module('observationManager.observation').controller('omSiteController', [
    '$scope', function($scope) {
        $scope.site = new site({
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