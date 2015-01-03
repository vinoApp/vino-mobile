'use strict';
angular.module('vino')
    .controller('DomainsCtrl', function ($scope, Domain, Origin) {

        angular.extend($scope, {
            aocs: Origin.getAllAocs(),
            selection: {},
            selectDomain: function (key) {
                $scope.selection.domain = Domain.get({
                    key: key
                });
            },
            clearDomainSelection: function () {
                $scope.selection.domain = null;
            }
        });

        $scope.$watch('selection', function (selection) {
            if (selection && selection.aoc) {
                $scope.domains = Domain.query({aoc: selection.aoc});
            }
        }, true);

    });
