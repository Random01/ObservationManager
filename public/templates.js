angular.module('observationManager.common').run(['$templateCache', function($templateCache) {  'use strict';

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