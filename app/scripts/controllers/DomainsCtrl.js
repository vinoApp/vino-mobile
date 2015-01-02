'use strict';
angular.module('vino')
    .controller('DomainsCtrl', function ($scope, Domain) {

        $scope.domains = Domain.query();

    });
