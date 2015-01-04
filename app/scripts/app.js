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
                        templateUrl: 'templates/home.html',
                        controller: 'HomeCtrl'
                    }
                }
            })
            .state('cellars', {
                url: '/cellars',
                views: {
                    'cellars-list': {
                        templateUrl: 'templates/cellars.html',
                        controller: 'CellarsCtrl'
                    }
                }
            })
            .state('domains', {
                abstract: true,
                url: '/domains',
                template: '<ion-nav-view name="content"></ion-nav-view>'
            })
            .state('domains.list', {
                url: '/list',
                views: {
                    'content': {
                        templateUrl: 'templates/domains.html',
                        controller: 'DomainsCtrl'
                    }
                }
            })
            .state('domains.detail', {
                url: '/:id/detail',
                views: {
                    'content': {
                        templateUrl: 'templates/domain.html',
                        controller: 'DomainCtrl'
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

