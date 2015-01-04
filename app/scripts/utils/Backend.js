'use strict';

angular.module('vino')
    .service('Backend', function ($localstorage) {

        var envs = {
            home: 'http://192.168.0.15:8080',
            dev: 'https://vino-dev.herokuapp.com'
        };

        var activeEnv = $localstorage.get('env');

        var service = {
            getActiveEnv: function () {
                return activeEnv ? activeEnv : 'dev';
            },
            setActiveEnv: function (env) {
                return $localstorage.set('env', env);
            },
            getEnvNames: function () {
                return _.keys(envs);
            },
            getBackendUrl: function (env) {
                return envs[env];
            },
            getActiveEnvBackendUrl: function () {
                return envs[service.getActiveEnv()];
            }
        };

        return service;
    });