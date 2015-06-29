angular.module('observationManager.observation').factory('omScope', function() {

    var scope = function (options) {
        if (options) {
            if (options.hasOwnProperty('model')) {
                this.model = options.model;
            }
            if (options.hasOwnProperty('aperture')) {
                this.aperture = options.aperture;
            }
            if (options.hasOwnProperty('focalLength')) {
                this.focalLength = options.focalLength;
            }
        }
    };

    scope.prototype.model = null;
    scope.prototype.aperture = null;
    scope.prototype.focalLength = null;

    scope.prototype.isValid = function() {
        return this.model != null && this.model != '';
    };

    return scope;

});