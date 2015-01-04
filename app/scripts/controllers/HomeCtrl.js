'use strict';

angular.module('vino')
    .controller('HomeCtrl', function ($scope, Build, Backend) {

        angular.extend($scope, {
            appName: Build.app.NAME,
            appVersion: Build.app.VERSION,
            env: {
                selected: Backend.getActiveEnv(),
                all: Backend.getEnvNames()
            },
            showEnvCombo: function () {
                $scope.envComboShown = true;
            }
        });

        $scope.$watch('env.selected', function (env) {
            if (env) {
                Backend.setActiveEnv(env);
            }
        });

    });