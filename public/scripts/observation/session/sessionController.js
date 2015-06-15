angular.module('observationManager.observation').controller('omSessionController', [
    '$scope', 'omSession', function ($scope, omSession) {

        $scope.languages = [
            { id: 'ru', text: 'Russian' },
            { id: 'en', text: 'English' }
        ];

        $scope.session = new omSession({
            id: 'some guid',
            lang: 'en',
            begin: new Date(),
            end: new Date(),
            weather: 'Cloudy',
            equipment: 'Tea',
            comments: 'Some comments'
        });
    }
]);