'use strict';

angular.module('vino')
    .filter('default', function () {

        return function (input) {
            if (input === undefined || input === null || input === '') {
                return '-';
            } else {
                return input;
            }
        };

    });