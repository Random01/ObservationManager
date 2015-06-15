(function (module) {


  module.run(['$templateCache', function($templateCache) {  'use strict';

    $templateCache.put('scripts/main/main.html',
      "<div ng-controller=\"omMainController\"><div>{{message}}</div><hr/><h4>Session</h4><div ng-include=\"'scripts/observation/session/session.html'\"></div><h4>Site</h4><div ng-include=\"'scripts/observation/site/site.html'\"></div></div>"
    );


    $templateCache.put('scripts/observation/session/session.html',
      "<div class=\"om-session-form\" ng-controller=\"omSessionController\"><div>{{'OM.LANGUAGE'|translate}}</div><select ng-options=\"language.name for language in languages\" ng-model=\"session.lang\"></select><div>{{'OM.BEGIN'|translate}}</div><input type=\"text\" ng-model=\"session.begin\"/><div>{{'OM.END'|translate}}</div><input type=\"text\" ng-model=\"session.end\"/><div>{{'OM.WEATHER'|translate}}</div><textarea ng-model=\"session.weather\"></textarea><div>{{'OM.EQUIPMENT'|translate}}</div><textarea ng-model=\"session.equipment\"></textarea><div>{{'OM.COMMENTS'|translate}}</div><textarea ng-model=\"session.comments\"></textarea><div>{{'OM.SITE'|translate}}</div><div><div>Select</div><button>{{'OM.NEW_SITE'|translate}}</button></div></div>"
    );


    $templateCache.put('scripts/observation/site/site.html',
      "<div class=\"om-site-form\" ng-controller=\"omSiteController\"><div>{{'OM.NAME'|translate}}</div><input type=\"text\" class=\"om-textbox\" ng-model=\"site.name\"/><div>{{'OM.LONGITUDE'|translate}}</div><input type=\"text\" class=\"om-textbox\" ng-model=\"site.longitude.value\"/><div>{{'OM.LATITUDE'|translate}}</div><input type=\"text\" class=\"om-textbox\" ng-model=\"site.latitude.value\"/><div>{{'OM.TIME_ZONE'|translate}}</div><input type=\"text\" class=\"om-textbox\" ng-model=\"site.timezone\"/></div>"
    );
  }]);

}) (angular.module ('observationManager.common', []));



(function (module) {


  module.controller('omSessionController', [
      '$scope', 'omSession', function ($scope, omSession) {

          $scope.languages = [
              { id: 'ru', text: 'Russian' },
              { id: 'en', text: 'English' }
          ];

          $scope.session = new omSession({
              id: 'some guid',
              lang: 'en',
              begin: new Date(),
              end: new Date(),
              weather: 'Cloudy',
              equipment: 'Tea',
              comments: 'Some comments'
          });
      }
  ]);
   //<session id="OMe1e4ad0b990140ef988e3471e63aed3e" lang="en">
   //           <begin>2015-06-11T18:59:35+00:02</begin>
   //           <end>2015-06-12T18:59:36+00:02</end>
   //           <site>OM912a8da2984b423eaa63fb34e3967b32</site>
   //           <weather><![CDATA[Nice]]></weather>
   //           <equipment><![CDATA[C8-N]]></equipment>
   //           <comments><![CDATA[Beer]]></comments>
   //</session>

  module.factory('omSession', function () {

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
  module.controller('omSiteController', [
      '$scope', 'omSite', function($scope, omSite) {
          $scope.site = new omSite({
              id: 'some guid',
              name: 'Saratov',
              longitude: {
                  unit: 'deg',
                  value: 51.53
              },
              latitude: {
                  unit: 'deg',
                  value: 46.02
              },
              timezone: 2
          });
      }
  ]);
  //<site id="OM912a8da2984b423eaa63fb34e3967b32">
  //            <name><![CDATA[Saratov]]></name>
  //            <longitude unit="deg">51.53</longitude>
  //            <latitude unit="deg">46.02</latitude>
  //            <timezone>2</timezone>
  //        </site>

  module.factory('omSite', function() {

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

      site.prototype.id = '';

      site.prototype.name = '';

      site.prototype.longitude = null;

      site.prototype.latitude = null;

      site.prototype.timezone = 0;

      return site;
  });

}) (angular.module ('observationManager.observation', []));



(function (module) {

  module
      .config([
          '$translateProvider', '$windowProvider', function($translateProvider, $windowProvider) {
              var wnd = $windowProvider.$get();
              var currentLanguage = wnd.navigator.userLanguage || wnd.navigator.language;
              $translateProvider.preferredLanguage(currentLanguage);
              $translateProvider.fallbackLanguage('en-US');
          }
      ]);
  module.config([
      '$translateProvider',
      function($translateProvider) {
          $translateProvider.translations('en-US', {
              OM: {
                  NAME: 'Name',
                  LONGITUDE: 'Longitude',
                  LATITUDE: 'Latitude',
                  TIME_ZONE: 'Timezone',
                  LANGUAGE: 'Language',
                  BEGIN: 'Begin',
                  END: 'End',
                  WEATHER: 'Weather',
                  EQUIPMENT: 'Equipment',
                  COMMENTS: 'Comments',
                  SITE: 'Site',
                  NEW_SITE: 'New Site'
              }
          });
      }
  ]);

}) (angular.module ('observationManager.localization', ['pascalprecht.translate']));



(function (module) {

  module
  module.controller('omMainController', [
          '$scope', '$translate', function($scope, $translate) {
              $scope.message = $translate.instant('OM.NAME');
          }
      ]);

}) (angular.module ('observationManager.app', ['observationManager.common', 'observationManager.observation', 'observationManager.localization']));


