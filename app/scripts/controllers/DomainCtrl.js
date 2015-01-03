'use strict';
angular.module('vino')
    .controller('DomainCtrl', function ($scope, $stateParams, Domain) {

        var id = $stateParams.id;

        $scope.domain = Domain.get({key: id});

    });
