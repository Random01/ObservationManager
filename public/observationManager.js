(function (module) {


  module.factory('_',
  [
      '$window',
      function($window) {
          return ($window._);
      }
  ]);
  module.run(['$templateCache', function($templateCache) {  'use strict';

    $templateCache.put('scripts/main/main.html',
      "<div><a href=\"#/scopes\">Scopes</a> <a href=\"#/observations\">Observations</a></div>"
    );


    $templateCache.put('scripts/observation/observation/observations.html',
      "<div><a href=\"#/observations/create\">Add new Observation</a></div>"
    );


    $templateCache.put('scripts/observation/scope/scope.html',
      "<div><div>{{'OM.MODEL'|translate}}</div><input type=\"text\" ng-model=\"scope.model\"/><div>{{'OM.APERTURE'|translate}}</div><input type=\"text\" ng-model=\"scope.aperture\"/><div>{{'OM.FOCAL_LENGTH'|translate}}</div><input type=\"text\" ng-model=\"scope.focalLength\"/></div><div><button ng-click=\"create()\">{{'OM.ADD'|translate}}</button> <button ng-click=\"cancel()\">{{'OM.CANCEL'|translate}}</button></div>"
    );


    $templateCache.put('scripts/observation/scope/scopes.html',
      "<div><a href=\"#scopes/create\">Add new Scope</a><div ng-repeat=\"scope in scopes\"><div>{{scope.model}}</div><div><a href=\"#scopes/edit\">Edit</a></div><div><a href=\"#scopes/delete\">Delete</a></div></div></div>"
    );


    $templateCache.put('scripts/observation/session/session.html',
      "<div class=\"om-session-form\" ng-controller=\"omSessionController\"><div>{{'OM.LANGUAGE'|translate}}</div><select ng-options=\"language.text for language in languages\" ng-model=\"session.lang\"></select><div>{{'OM.BEGIN'|translate}}</div><input type=\"text\" ng-model=\"session.begin\"/><div>{{'OM.END'|translate}}</div><input type=\"text\" ng-model=\"session.end\"/><div>{{'OM.WEATHER'|translate}}</div><textarea ng-model=\"session.weather\"></textarea><div>{{'OM.EQUIPMENT'|translate}}</div><textarea ng-model=\"session.equipment\"></textarea><div>{{'OM.COMMENTS'|translate}}</div><textarea ng-model=\"session.comments\"></textarea><div>{{'OM.SITE'|translate}}</div><select ng-options=\"site.name for site in sites\" ng-model=\"session.site\"></select><button>{{'OM.NEW_SITE'|translate}}</button></div>"
    );


    $templateCache.put('scripts/observation/site/site.html',
      "<div class=\"om-site-form\" ng-controller=\"omSiteController\"><div>{{'OM.NAME'|translate}}</div><input type=\"text\" class=\"om-textbox\" ng-model=\"site.name\"/><div>{{'OM.LONGITUDE'|translate}}</div><input type=\"text\" class=\"om-textbox\" ng-model=\"site.longitude.value\"/><div>{{'OM.LATITUDE'|translate}}</div><input type=\"text\" class=\"om-textbox\" ng-model=\"site.latitude.value\"/><div>{{'OM.TIME_ZONE'|translate}}</div><input type=\"text\" class=\"om-textbox\" ng-model=\"site.timezone\"/></div>"
    );
  }]);

}) (angular.module ('observationManager.common', []));



(function (module) {


  module.factory('omObservationManager', [
      function() {

          var service = {};

          service.getAllObservations = function(request) {

          };

          return service;

      }
  ]);
  //<observation id="OM74e157598a08492c963fb10237f75eb0">
  //        <observer>OM1bc08eab6b3f441b9d8b9886b759f26b</observer>
  //        <site>OM912a8da2984b423eaa63fb34e3967b32</site>
  //        <session>OMe1e4ad0b990140ef988e3471e63aed3e</session>
  //        <target>OM87ee4b0623bf49f2a909cd44071ee82e</target>
  //        <begin>2015-06-11T18:59:35+00:02</begin>
  //        <seeing>3</seeing>
  //        <scope>OMcb88d96076614498937d23e07902af1a</scope>
  //        <result lang="en" xsi:type="oal:findingsDeepSkyType">
  //            <description><![CDATA[]]></description>
  //            <rating>2</rating>
  //        </result>
  //    </observation>

  module.factory('omObservation', function () {
      var observation = function() {

      };

      observation.prototype.observer = null;

      observation.prototype.site = null;

      observation.prototype.session = null;

      observation.prototype.target = null;

      observation.prototype.begin = null;

      observation.prototype.scope = null;

      return observation;
  });
  module.controller('omObservationsController', [
      '$scope', 'omObservationManager', function ($scope, omObservationManager) {
          'use strict';

          $scope.observations = [];
      }
  ]);
  module.controller('omScopeController', [
      '$scope', 'omScope', 'omScopeManager', '$location',
      function ($scope, omScope, omScopeManager, $location) {
          $scope.scope = new omScope();

          $scope.create = function () {
              if ($scope.scope.isValid()) {
                  omScopeManager.add($scope.scope).then(function () {
                      $location.path('scopes');
                  });
              }
          };

          $scope.cancel = function() {
              $location.path('scopes');
          };

      }
  ]);
  module.factory('omScopeManager', [
      '$http', '$q', '_', function ($http, $q, _) {

          'use strict';

          var service = {},
              scopes = [];

          /**
          * 
          */
          service.getAllScopes = function(request) {
              return $q.when(scopes);
          };

          service.add = function (scope) {
              scopes.push(scope);
              return $q.when();
          };

          service.update = function(scope) {
              return $q.when();
          };

          service.delete = function (scope) {
              return $q.when();
          };

          service.getScopeById = function(request) {
              return $q.when();
          };

          return service;
      }
  ]);
  module.factory('omScope', function() {

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
  module.controller('omScopesController', [
      '$scope', 'omScopeManager',
      function ($scope, omScopeManager) {
          'use strict';

          omScopeManager.getAllScopes().then(function(scopes) {
              $scope.scopes = scopes;
          });

      }
  ]);
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
                  NEW_SITE: 'New Site',
                  MODEL: 'Model',
                  APERTURE: 'Aperture',
                  FOCAL_LENGTH: 'Focal length',
                  ADD: 'Add',
                  CANCEL: 'Cancel'
              }
          });
      }
  ]);

}) (angular.module ('observationManager.localization', ['pascalprecht.translate']));



(function (module) {

  var omApp = module;

  omApp.config([
      '$routeProvider',
      function ($routeProvider) {
          'use strict';

          $routeProvider
              .when('/observations', {
                  templateUrl: 'scripts/observation/observation/observations.html',
                  controller: 'omObservationsController'
              })
              .when('/scopes/create', {
                  templateUrl: 'scripts/observation/scope/scope.html',
                  controller: 'omScopeController'
              })
              .when('/scopes/:scopeId', {
                  templateUrl: 'scripts/observation/scope/scope.html',
                  controller: 'omScopeController'
              })
              .when('/scopes', {
                  templateUrl: 'scripts/observation/scope/scopes.html',
                  controller: 'omScopesController'
              })
              .otherwise({
                  redirectTo: '/'
          });
      }
  ]);
  module.controller('omMainController', [
          '$scope', '$translate', function($scope, $translate) {

          }
      ]);

}) (angular.module ('observationManager.app', ['ngRoute', 'ngResource', 'observationManager.common', 'observationManager.observation', 'observationManager.localization']));


