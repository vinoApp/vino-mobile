'use strict';

angular.module('vino', [ 'ngResource', 'ionic', 'config' ])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider

            .state('home', {
                url: '/',
                views: {
                    'home': {
                        templateUrl: 'templates/home.html'
                    }
                }
            })
            .state('cellars', {
                url: '/cellars',
                views: {
                    'cellars': {
                        templateUrl: 'templates/cellars.html',
                        controller: 'CellarsCtrl'
                    }
                }
            })
            .state('domains', {
                url: '/domains',
                views: {
                    'domains': {
                        templateUrl: 'templates/domains.html',
                        controller: 'DomainsCtrl'
                    }
                }
            })
            .state('statistics', {
                url: '/statistics',
                views: {
                    'statistics': {
                        templateUrl: 'templates/statistics.html',
                        controller: 'StatisticsCtrl'
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/');

    });

