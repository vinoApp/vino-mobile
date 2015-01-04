'use strict';

angular.module('vino')
    .service('Origin', function ($resource, Backend) {

        var resource = $resource(Backend.getActiveEnvBackendUrl() + '/api/origins/:kind');

        return {
            getAllAocs: function () {
                return resource.query({
                    kind: 'aocs'
                });
            },
            getAllRegions: function () {
                return resource.query({
                    kind: 'regions'
                });
            }
        }
    });