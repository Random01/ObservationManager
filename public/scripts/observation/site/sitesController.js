angular.module('observationManager.observation').controller('omSitesController', [
    '$scope', 'omSiteManager', function ($scope, omSiteManager) {
        omSiteManager.getAllSites().then(function (sites) {
            $scope.sites = sites;
        });
    }
]);