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
            .state('tabs', {
                abstract: true,
                templateUrl: 'templates/tabs.html'
            })
            .state('tabs.home', {
                url: '/',
                views: {
                    'home': {
                        templateUrl: 'templates/home.html',
                        controller: 'HomeCtrl'
                    }
                }
            })
            .state('tabs.cellars', {
                abstract: true,
                url: '/cellars',
                views: {
                    content: {
                        template: '<ion-nav-view></ion-nav-view>'
                    }
                }
            })
            .state('tabs.cellars.list', {
                url: '/list',
                templateUrl: 'templates/cellars.html',
                controller: 'CellarsCtrl'
            })
            .state('tabs.cellars.detail', {
                url: '/:id/detail',
                templateUrl: 'templates/cellar.html',
                controller: 'CellarCtrl'
            })
            .state('tabs.domains', {
                abstract: true,
                url: '/domains',
                views: {
                    content: {
                        template: '<ion-nav-view></ion-nav-view>'
                    }
                }
            })
            .state('tabs.domains.list', {
                url: '/list',
                templateUrl: 'templates/domains.html',
                controller: 'DomainsCtrl'
            })
            .state('tabs.domains.detail', {
                url: '/:id/detail',
                templateUrl: 'templates/domain.html',
                controller: 'DomainCtrl'
            })
            .state('tabs.statistics', {
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

