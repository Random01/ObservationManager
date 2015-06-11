angular
    .module('observationManager.app')
    .controller('mainController', [
        '$scope', function($scope) {
            $scope.message = 'Hello!';
        }
    ]);