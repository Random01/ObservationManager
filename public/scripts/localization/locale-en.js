angular.module('observationManager.localization').config([
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
                CANCEL: 'Cancel',
                ADD_NEW_SITE: 'Add New Site',
                DELETE: 'Delete',
                EDIT: 'Edit'
            }
        });
    }
]);