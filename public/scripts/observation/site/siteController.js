angular.module('observationManager.observation').controller('omSiteController', [
    '$scope', 'omSite', 'omSiteManager', '$location',
    function ($scope, omSite, omSiteManager, $location) {
        $scope.site = new omSite();

        $scope.create = function() {
            if ($scope.site.isValid()) {
                omSiteManager.add($scope.site).then(function() {
                    $location.path('scopes');
                });
            }
        };

        $scope.cancel = function() {
            $location.path('scopes');
        };
    }
]);