angular.module('observationManager.observation').factory('omSiteManager', [
    '$q', 'omSite',
    function ($q, omSite) {
        'use strict';

        var service = {};

        service.getAllSites = function (request) {
            var sites = [
                new omSite({
                    name: 'Saratov'
                }),
                new omSite({
                    name: 'Mokrous'
                })
            ];

            return $q.when(sites);
        };

        service.add = function() {
            return $q.when();
        };

        service.update = function() {
            return $q.when();
        };

        service.delete = function() {
            return $q.when();
        };

        service.getSiteById = function() {
            return $q.when();
        };

        return service;
    }
]);