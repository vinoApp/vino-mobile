'use strict';

angular.module('vino')
    .service('Cellar', function ($resource, Backend) {

        return $resource(Backend.getActiveEnvBackendUrl() + '/api/cellars/:key/:action');

    });