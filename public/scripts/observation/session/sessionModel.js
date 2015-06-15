 //<session id="OMe1e4ad0b990140ef988e3471e63aed3e" lang="en">
 //           <begin>2015-06-11T18:59:35+00:02</begin>
 //           <end>2015-06-12T18:59:36+00:02</end>
 //           <site>OM912a8da2984b423eaa63fb34e3967b32</site>
 //           <weather><![CDATA[Nice]]></weather>
 //           <equipment><![CDATA[C8-N]]></equipment>
 //           <comments><![CDATA[Beer]]></comments>
 //</session>

angular.module('observationManager.observation').factory('omSession', function () {

    var session = function (options) {
        if (options) {
            if (options.hasOwnProperty('id')) {
                this.id = options.id;
            }
            if (options.hasOwnProperty('lang')) {
                this.lang = options.lang;
            }
            if (options.hasOwnProperty('begin')) {
                this.begin = options.begin;
            }
            if (options.hasOwnProperty('end')) {
                this.end = options.end;
            }
            if (options.hasOwnProperty('site')) {
                this.site = options.site;
            }
            if (options.hasOwnProperty('weather')) {
                this.weather = options.weather;
            }
            if (options.hasOwnProperty('equipment')) {
                this.equipment = options.equipment;
            }
            if (options.hasOwnProperty('comments')) {
                this.comments = options.comments;
            }
        }
    };
    
    session.prototype.id = '';
    
    session.prototype.lang = '';
    
    session.prototype.begin = null;
    
    session.prototype.end = null;
    
    session.prototype.site = null;
    
    session.prototype.weather = '';
    
    session.prototype.equipment = '';
    
    session.prototype.comments = '';

    return session;

});