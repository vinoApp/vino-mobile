'use strict';

angular.module('vino')
    .service('Domain', function ($resource) {

        return $resource('/api/domains/:key');
    });