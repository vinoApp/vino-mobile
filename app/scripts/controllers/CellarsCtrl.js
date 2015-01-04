'use strict';
angular.module('vino')
    .controller('CellarsCtrl', function ($scope, $state, Cellar) {

        angular.extend($scope, {
            cellars: Cellar.query(),
            selectCellar: function (key) {
                $state.go('tabs.cellars.detail', { id: key });
            }
        });

    });
