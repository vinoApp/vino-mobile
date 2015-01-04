'use strict';

angular.module('vino')
    .service('Domain', function ($resource, Backend) {

        return $resource(Backend.getActiveEnvBackendUrl() + '/api/domains/:key');
    });