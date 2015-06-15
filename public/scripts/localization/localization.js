angular.module('observationManager.localization', ['pascalprecht.translate'])
    .config([
        '$translateProvider', '$windowProvider', function($translateProvider, $windowProvider) {
            var wnd = $windowProvider.$get();
            var currentLanguage = wnd.navigator.userLanguage || wnd.navigator.language;
            $translateProvider.preferredLanguage(currentLanguage);
            $translateProvider.fallbackLanguage('en-US');
        }
    ]);