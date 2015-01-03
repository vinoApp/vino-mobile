'use strict';
angular.module('vino')
    .controller('DomainsCtrl', function ($scope, $state, Origin, Domain) {

        angular.extend($scope, {
            aocs: Origin.getAllAocs(),
            selection: {},
            selectDomain: function (key) {
                $state.go('domains.detail', { id: key });
            }
        });

        $scope.$watch('selection', function (selection) {
            if (selection && selection.aoc) {
                $scope.domains = Domain.query({aoc: selection.aoc});
            }
        }, true);

    });
