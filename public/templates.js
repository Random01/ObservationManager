angular.module('observationManager.common').run(['$templateCache', function($templateCache) {  'use strict';

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