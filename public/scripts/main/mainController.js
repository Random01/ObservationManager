angular.module('observationManager.app').controller('omMainController', [
        '$scope', '$translate', function($scope, $translate) {
            $scope.message = $translate.instant('OM.NAME');
        }
    ]);