'use strict';

angular.module('vino')
    .service('Domain', function ($resource, serverUrl) {

        return $resource(serverUrl + '/api/domains/:key');
    });