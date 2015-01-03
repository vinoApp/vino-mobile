'use strict';

angular.module('vino')
    .service('Origin', function ($resource, serverUrl) {

        var resource = $resource(serverUrl + '/api/origins/:kind');

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