angular.module('observationManager.common').factory('_',
[
    '$window',
    function($window) {
        return ($window._);
    }
]);