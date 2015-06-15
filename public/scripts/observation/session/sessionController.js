angulare.module('observationManager.observation').controller('omSessionController', [
    '$scope', function($scope) {

        $scope.languages = [
            { id: 'ru', text: 'Russian' },
            { id: 'en', text: 'English' }
        ];

        $scope.session = new session({

        });
    }
]);