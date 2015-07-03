//<site id="OM912a8da2984b423eaa63fb34e3967b32">
//            <name><![CDATA[Saratov]]></name>
//            <longitude unit="deg">51.53</longitude>
//            <latitude unit="deg">46.02</latitude>
//            <timezone>2</timezone>
//        </site>

angular.module('observationManager.observation').factory('omSite', function() {
    
    var site = function (options) {
        if (options) {
            if (options.hasOwnProperty('id')) {
                this.id = options.id;
            }
            if (options.hasOwnProperty('name')) {
                this.name = options.name;
            }
            if (options.hasOwnProperty('longitude')) {
                this.longitude = options.longitude;
            }
            if (options.hasOwnProperty('latitude')) {
                this.latitude = options.latitude;
            }
            if (options.hasOwnProperty('timezone')) {
                this.timezone = options.timezone;
            }
        }
    };

    site.prototype.id = null;
    
    site.prototype.name = null;
    
    site.prototype.longitude = null;
    
    site.prototype.latitude = null;
    
    site.prototype.timezone = 0;

    site.prototype.isValid = function() {
        return true;
    };

    return site;
});