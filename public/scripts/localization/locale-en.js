angular.module('observationManager.localization').config([
    '$translateProvider',
    function($translateProvider) {
        $translateProvider.translations('en-US', {
            OM: {
                NAME: 'Name',
                LONGITUDE: 'Longitude',
                LATITUDE: 'Latitude',
                TIME_ZONE: 'Timezone'
            }
        });
    }
]);