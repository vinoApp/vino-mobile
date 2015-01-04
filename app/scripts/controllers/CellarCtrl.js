'use strict';
angular.module('vino')
    .controller('CellarCtrl', function ($scope, $stateParams, $state, Cellar, CellarContent) {

        var id = $stateParams.id;

        var loadContent = function () {
            return $scope.content = CellarContent.getContent(id);
        };

        angular.extend($scope, {
            cellar: Cellar.get({key: id}),
            content: loadContent(),
            showDomainDetail: function (key) {
                $state.go('tabs.domains.detail', { id: key });
            },
            plus: function (record) {
                CellarContent.in(id, record, 1, {
                    success: function () {
                        loadContent();
                    },
                    error: function () {

                    }
                });
            },
            minus: function (record) {
                CellarContent.out(id, record, 1, {
                    success: function () {
                        loadContent();
                    },
                    error: function () {

                    }
                });
            }
        })
    });
